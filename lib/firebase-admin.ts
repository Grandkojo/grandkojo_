import { getApps, initializeApp, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

const databaseId = process.env.FIREBASE_CLIENT_DB_ID || 'grandkojo-site'
const serviceAccountJson = process.env.FIREBASE_ADMIN_SERVICE_ACCOUNT_JSON

function getAdminApp() {
  if (getApps().length) {
    return getApps()[0]
  }

  if (!serviceAccountJson) {
    throw new Error('FIREBASE_ADMIN_SERVICE_ACCOUNT_JSON is missing')
  }

  const parsed = JSON.parse(serviceAccountJson)
  return initializeApp({
    credential: cert(parsed),
  })
}

export function getAdminDb() {
  const app = getAdminApp()
  return getFirestore(app, databaseId)
}
