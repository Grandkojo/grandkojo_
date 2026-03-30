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

    return snapshot.docs.map((doc) => {
      const data = doc.data() as CaseStudyDoc
      return {
        title: data.title || 'Untitled Case Study',
        category: data.client || 'Client Project',
        description: data.challenge || '',
        metric: data.result || '',
        stack: data.solution ? [data.solution] : [],
        href: 'https://portfolio.grandkojo.my',
      }
    })
  } catch (error) {
    console.error('Failed to read case studies from Firestore:', error)
    return defaultCaseStudies
  }
}
