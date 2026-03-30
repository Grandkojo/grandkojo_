import { initializeApp, cert, getApps } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

const serviceAccountJson = process.env.FIREBASE_ADMIN_SERVICE_ACCOUNT_JSON
const databaseId = process.env.FIREBASE_CLIENT_DB_ID || 'grandkojo-site'

if (!serviceAccountJson) {
  throw new Error('FIREBASE_ADMIN_SERVICE_ACCOUNT_JSON is missing')
}

const serviceAccount = JSON.parse(serviceAccountJson)
const app = getApps().length
  ? getApps()[0]
  : initializeApp({ credential: cert(serviceAccount) })

const db = getFirestore(app, databaseId)

const services = [
  {
    title: 'API Build Sprint',
    description: 'From architecture to deployment, I build production-ready backend systems and REST APIs that give your product a reliable core.',
    price: '$150-$5,000',
    deliveryTime: '2-4 weeks',
    features: ['Django', 'Laravel', 'FastAPI', 'Java', 'PostgreSQL'],
  },
  {
    title: 'AI Feature Integration',
    description: 'I integrate LLM-powered capabilities into existing tools and workflows so your team can automate high-friction decisions and repetitive tasks.',
    price: '$150-$5,000',
    deliveryTime: '1-3 weeks',
    features: ['LLM Integrations', 'Gemini API', 'RAG', 'Prompt Workflows'],
  },
  {
    title: 'Process Automation Build',
    description: 'I replace spreadsheet-and-WhatsApp workflows with tailored internal tools that reduce manual steps and make operations predictable.',
    price: '$150-$5,000',
    deliveryTime: 'scoped per workflow',
    features: ['Workflow Design', 'Internal Tools', 'Automation', 'Web Apps'],
  },
]

const caseStudies = [
  {
    title: 'FeverDiff AI',
    client: 'Healthcare AI',
    challenge: "Built an AI differential diagnosis assistant tailored to Ghana's disease context to support faster first-pass triage decisions.",
    solution: 'MedGemma, Gemini 2.5, FastAPI, Modal Labs',
    result: '~75% average diagnostic accuracy',
  },
  {
    title: 'Hub Map GH',
    client: 'Community Platform',
    challenge: "Launched a community-maintained ecosystem directory for Ghana's tech hubs, creating shared visibility for founders and builders.",
    solution: 'Next.js, Firebase, Gemini Pro, Leaflet',
    result: '19 verified listings at launch',
  },
  {
    title: 'EpiScope',
    client: 'Public Health Analytics',
    challenge: 'Developed an outbreak monitoring and prediction platform combining ML forecasts and contextual AI summaries for public health teams.',
    solution: 'Django, XGBoost, Gemini, PostgreSQL',
    result: '84% outbreak prediction accuracy',
  },
]

async function seedCollection(collectionName, docs) {
  const existing = await db.collection(collectionName).get()
  const batch = db.batch()
  existing.docs.forEach((doc) => batch.delete(doc.ref))
  docs.forEach((data) => {
    const ref = db.collection(collectionName).doc()
    batch.set(ref, data)
  })
  await batch.commit()
}

async function run() {
  await seedCollection('services', services)
  await seedCollection('case-studies', caseStudies)
  console.log(`Seeded services and case-studies into database "${databaseId}"`)
}

run().catch((error) => {
  console.error('Firestore seed failed:', error)
  process.exit(1)
})
