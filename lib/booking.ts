import { getAdminDb } from '@/lib/firebase-admin'

export type SiteBooking = {
  status: 'free' | 'booked'
  reachBackAt?: string
}

const BOOKING_DOC_PATH = 'settings/booking' as const

export const defaultSiteBooking: SiteBooking = { status: 'free' }

export async function getSiteBooking(): Promise<SiteBooking> {
  try {
    const db = getAdminDb()
    const snap = await db.doc(BOOKING_DOC_PATH).get()
    if (!snap.exists) {
      return { ...defaultSiteBooking }
    }
    const data = snap.data() as { status?: string; reachBackAt?: string } | undefined
    const status = data?.status === 'booked' ? 'booked' : 'free'
    const reachBackAt =
      typeof data?.reachBackAt === 'string' && data.reachBackAt.trim().length > 0
        ? data.reachBackAt.trim()
        : undefined
    return status === 'booked' ? { status: 'booked', reachBackAt } : { status: 'free', reachBackAt: undefined }
  } catch {
    return { ...defaultSiteBooking }
  }
}
