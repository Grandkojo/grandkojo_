import { defaultCaseStudies, defaultServices, type CaseStudyItem, type ServiceItem } from '@/lib/content'
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
}

const CURRENT_WORK_SLUG = 'automated-lead-qualiier-system'

function normalizeCaseStudyTag(input?: string): CaseStudyItem['category'] {
  if (!input) {
    return 'Case Study'
  }

  return input.toLowerCase().includes('client') ? 'Client' : 'Case Study'
}

export async function getServicesData(): Promise<ServiceItem[]> {
  try {
    const db = getAdminDb()
    const snapshot = await db.collection('services').orderBy('title', 'asc').get()

    if (snapshot.empty) {
      return defaultServices
    }

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
  } catch (error) {
    console.error('Failed to read services from Firestore:', error)
    return defaultServices
  }
}

export async function getCaseStudiesData(): Promise<CaseStudyItem[]> {
  try {
    const db = getAdminDb()
    const snapshot = await db.collection('case-studies').get()

    if (snapshot.empty) {
      return defaultCaseStudies
    }

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
      }
    })

    const mergedBySlug = new Map(defaultCaseStudies.map((item) => [item.slug, item]))

    for (const item of firestoreItems) {
      mergedBySlug.set(item.slug, item)
    }

    const merged = Array.from(mergedBySlug.values())
    return merged.filter((item) => item.slug === CURRENT_WORK_SLUG)
  } catch (error) {
    console.error('Failed to read case studies from Firestore:', error)
    return defaultCaseStudies
  }
}
