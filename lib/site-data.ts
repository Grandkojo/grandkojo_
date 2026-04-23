import { type CaseStudyItem, type ServiceItem } from '@/lib/content'
import { getAdminDb } from '@/lib/firebase-admin'

interface ServiceDoc {
  title?: string
  description?: string
  price?: string
  deliveryTime?: string
  features?: string[]
}

interface CaseStudyDoc {
  title?: string
  client?: string
  challenge?: string
  solution?: string
  result?: string
  metric?: string
  stack?: string[] | string
  valueProposition?: string
  slug?: string
  videoUrl?: string
  photos?: string[] | string
}

const DEFAULT_CASE_STUDY_VIDEO_URL = 'https://www.w3schools.com/html/mov_bbb.mp4'
const DEFAULT_CASE_STUDY_PHOTOS = [
  'https://picsum.photos/seed/leadflow-1/1200/750',
  'https://picsum.photos/seed/leadflow-2/1200/750',
  'https://picsum.photos/seed/leadflow-3/1200/750',
  'https://picsum.photos/seed/leadflow-4/1200/750',
  'https://picsum.photos/seed/leadflow-5/1200/750',
]

function normalizeCaseStudyTag(input?: string): CaseStudyItem['category'] {
  if (!input) {
    return 'Case Study'
  }

  return input.toLowerCase().includes('client') ? 'Client' : 'Case Study'
}

export async function getServicesData(): Promise<ServiceItem[]> {
  const db = getAdminDb()
  const snapshot = await db.collection('services').orderBy('title', 'asc').get()

  return snapshot.docs.map((doc, index) => {
    const data = doc.data() as ServiceDoc
    return {
      number: String(index + 1).padStart(2, '0'),
      title: data.title || 'Untitled Service',
      description: data.description || '',
      timeline: data.deliveryTime ? `Typical timeline: ${data.deliveryTime}` : 'Typical timeline: scoped per workflow',
      price: data.price ? `Investment: ${data.price}` : 'Investment: scoped per project',
      tags: Array.isArray(data.features) ? data.features : [],
    }
  })
}

export async function getCaseStudiesData(): Promise<CaseStudyItem[]> {
  const db = getAdminDb()
  const snapshot = await db.collection('case-studies').get()

  const firestoreItems = snapshot.docs.map((doc) => {
    const data = doc.data() as CaseStudyDoc
    const normalizedTitle = (data.title || 'Untitled Case Study').toLowerCase()
    const generatedSlug = normalizedTitle
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
    const normalizedStack = Array.isArray(data.stack)
      ? data.stack
      : typeof data.stack === 'string'
        ? data.stack.split(',').map((item) => item.trim()).filter(Boolean)
        : []
    const normalizedPhotos = Array.isArray(data.photos)
      ? data.photos.map((item) => item.trim()).filter(Boolean).slice(0, 5)
      : typeof data.photos === 'string'
        ? data.photos.split(',').map((item) => item.trim()).filter(Boolean).slice(0, 5)
        : []
    const hasVideo = typeof data.videoUrl === 'string' && data.videoUrl.trim().length > 0

    return {
      slug: data.slug || generatedSlug || doc.id,
      title: data.title || 'Untitled Case Study',
      category: normalizeCaseStudyTag(data.client),
      description: data.challenge || '',
      metric: data.metric || data.result || '',
      stack: normalizedStack,
      valueProposition: data.valueProposition || data.solution || '',
      challenge: data.challenge || '',
      solution: data.solution || '',
      outcome: data.result || '',
      videoUrl: hasVideo ? data.videoUrl?.trim() : DEFAULT_CASE_STUDY_VIDEO_URL,
      photos: normalizedPhotos.length > 0 ? normalizedPhotos : DEFAULT_CASE_STUDY_PHOTOS,
    }
  })

  return firestoreItems
}
