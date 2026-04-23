#!/bin/bash
set -euo pipefail

# -----------------------------
# Configuration (edit as needed)
# -----------------------------
PROJECT_ID="ageless-talent-425021-g8"
REGION="us-central1"
SERVICE_NAME="grandkojo"
IMAGE_NAME="grandkojo"
IMAGE_URI="gcr.io/${PROJECT_ID}/${IMAGE_NAME}"

echo "🚀 Deploying ${SERVICE_NAME} to Cloud Run"
echo "Project: ${PROJECT_ID}"
echo "Region : ${REGION}"

# Load .env.local if present (optional)
if [ -f .env.local ]; then
  set -a
  # Normalize "KEY = VALUE" -> "KEY=VALUE" and strip leading 'export '
  # Skip FIREBASE_ADMIN_SERVICE_ACCOUNT_JSON to avoid shell parsing of JSON
  source <(sed -e 's/ *= */=/g' -e 's/^export //' .env.local | grep -v '^#' | grep -v '^FIREBASE_ADMIN_SERVICE_ACCOUNT_JSON')
  set +a
  echo "✅ Loaded environment variables from .env.local (excluding FIREBASE_ADMIN_SERVICE_ACCOUNT_JSON)"
else
  echo "ℹ️  .env.local not found, continuing without local env file"
fi

echo "------------------------------------------------"
echo "🔌 Ensuring required APIs are enabled..."
gcloud services enable \
  artifactregistry.googleapis.com \
  run.googleapis.com \
  cloudbuild.googleapis.com \
  --project="${PROJECT_ID}"

echo "------------------------------------------------"
echo "🏗️  Building Docker image with Cloud Build..."

# Optional: expose NEXT_PUBLIC_* at build time by mirroring local file
TEMP_ENV_FILE_CREATED=false
if [ -f .env.local ]; then
  cp .env.local .env.production
  TEMP_ENV_FILE_CREATED=true
  echo "📝 Created temporary .env.production for build context"
fi

BUILD_SUBMIT_OUTPUT="$(gcloud builds submit \
  --tag "${IMAGE_URI}" \
  . \
  --project="${PROJECT_ID}" \
  --async \
  --format='value(id)' 2>&1)"
echo "${BUILD_SUBMIT_OUTPUT}"

BUILD_ID="$(printf '%s\n' "${BUILD_SUBMIT_OUTPUT}" | sed -nE 's#^([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})$#\1#p' | head -n1)"

if [ -z "${BUILD_ID}" ]; then
  BUILD_ID="$(printf '%s\n' "${BUILD_SUBMIT_OUTPUT}" | sed -nE 's#.*builds/([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}).*#\1#p' | head -n1)"
fi

if [ -z "${BUILD_ID}" ]; then
  echo "❌ Failed to start Cloud Build (no build id returned)."
  exit 1
fi

echo "🧾 Cloud Build started: ${BUILD_ID}"
echo "⏱️  Polling build status with backoff..."

POLL_SECONDS=10
MAX_POLL_SECONDS=60

while true; do
  set +e
  BUILD_STATUS_OUTPUT="$(gcloud builds describe "${BUILD_ID}" --project="${PROJECT_ID}" --format='value(status)' 2>&1)"
  DESCRIBE_EXIT_CODE=$?
  set -e

  if [ ${DESCRIBE_EXIT_CODE} -ne 0 ]; then
    if echo "${BUILD_STATUS_OUTPUT}" | grep -Eq "RATE_LIMIT_EXCEEDED|quota|429|RESOURCE_EXHAUSTED"; then
      echo "⚠️  Cloud Build API rate-limited. Retrying in ${POLL_SECONDS}s..."
      sleep "${POLL_SECONDS}"
      POLL_SECONDS=$((POLL_SECONDS * 2))
      if [ ${POLL_SECONDS} -gt ${MAX_POLL_SECONDS} ]; then
        POLL_SECONDS=${MAX_POLL_SECONDS}
      fi
      continue
    fi

    echo "❌ Failed to read build status:"
    echo "${BUILD_STATUS_OUTPUT}"
    exit 1
  fi

  BUILD_STATUS="$(echo "${BUILD_STATUS_OUTPUT}" | tr -d '\r\n')"
  POLL_SECONDS=10

  case "${BUILD_STATUS}" in
    SUCCESS)
      echo "✅ Cloud Build completed successfully."
      break
      ;;
    FAILURE|INTERNAL_ERROR|TIMEOUT|CANCELLED|EXPIRED)
      echo "❌ Cloud Build ended with status: ${BUILD_STATUS}"
      exit 1
      ;;
    *)
      echo "⏳ Cloud Build status: ${BUILD_STATUS}. Checking again in ${POLL_SECONDS}s..."
      sleep "${POLL_SECONDS}"
      ;;
  esac
done

if [ "${TEMP_ENV_FILE_CREATED}" = true ]; then
  rm -f .env.production
  echo "🗑️  Removed temporary .env.production"
fi

echo "------------------------------------------------"
echo "☁️  Deploying to Cloud Run service: ${SERVICE_NAME}"

# Add only vars that exist locally
ENV_VARS=()
add_env_if_set() {
  local key="$1"
  local value="${!key-}"
  if [ -n "${value}" ]; then
    ENV_VARS+=("${key}=${value}")
  fi
}

# Add the env keys your app may use (safe if unset)
add_env_if_set "NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY"
add_env_if_set "NEXT_PUBLIC_APP_URL"
add_env_if_set "NEXTAUTH_URL"
add_env_if_set "NEXTAUTH_SECRET"
add_env_if_set "GEMINI_API_KEY"
add_env_if_set "NEXT_PUBLIC_ADMIN_USER"
add_env_if_set "ADMIN_PASSWORD"
add_env_if_set "NEXT_PUBLIC_FIREBASE_API_KEY"
add_env_if_set "NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN"
add_env_if_set "NEXT_PUBLIC_FIREBASE_PROJECT_ID"
add_env_if_set "NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET"
add_env_if_set "NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID"
add_env_if_set "NEXT_PUBLIC_FIREBASE_APP_ID"

DEPLOY_ARGS=(
  "--image=${IMAGE_URI}"
  "--platform=managed"
  "--region=${REGION}"
  "--allow-unauthenticated"
  "--project=${PROJECT_ID}"
)

if [ ${#ENV_VARS[@]} -gt 0 ]; then
  DEPLOY_ARGS+=("--set-env-vars=$(IFS=,; echo "${ENV_VARS[*]}")")
fi

gcloud run deploy "${SERVICE_NAME}" "${DEPLOY_ARGS[@]}"

echo "------------------------------------------------"
echo "✅ Deployment successful"

SERVICE_URL=$(gcloud run services describe "${SERVICE_NAME}" \
  --platform=managed \
  --region="${REGION}" \
  --project="${PROJECT_ID}" \
  --format='value(status.url)')

echo "🌍 Service URL: ${SERVICE_URL}"

echo "------------------------------------------------"
echo "🧹 Cleaning up old container images (keep latest 2)..."

DIGESTS=$(gcloud container images list-tags "${IMAGE_URI}" --limit=9999 --sort-by=~TIMESTAMP --format='get(digest)')
COUNT=0
KEEP=2
for digest in ${DIGESTS}; do
  COUNT=$((COUNT + 1))
  if [ ${COUNT} -le ${KEEP} ]; then
    echo "   Keep: ${digest}"
  else
    echo "   Delete: ${digest}"
    gcloud container images delete "${IMAGE_URI}@${digest}" --force-delete-tags --quiet
  fi
done

echo "✨ Cleanup complete. Kept last ${KEEP} images."
