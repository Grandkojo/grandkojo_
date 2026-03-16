# grandkojo

Marketing/personal brand site for `grandkojo.my`, built with Next.js.

## Tech stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS (plus inline editorial styling)

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment variables

Create `.env.local` for local secrets/config.


## Scripts

- `npm run dev` - run local dev server
- `npm run build` - build production app
- `npm run start` - run production server
- `npm run lint` - run lint checks

## Deployment (Google Cloud Run)

This repo includes:

- `Dockerfile` (multi-stage, Next standalone output)
- `deploy.sh` (Cloud Build + Cloud Run deploy)

### Deploy

```bash
bash deploy.sh
```

Default deploy config in `deploy.sh`:

- Cloud Run service name: `service-name`
- Region: `us-central1`
- Project ID: `project-id`

Edit those values in `deploy.sh` if needed.

## Open Graph image

Primary OG image is currently:

- `public/og/grandkojo-og-v1.svg`

Configured in `app/layout.tsx` under `metadata.openGraph.images` and `metadata.twitter.images`.
