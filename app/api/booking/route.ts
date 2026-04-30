import { NextResponse } from 'next/server'
import { getSiteBooking } from '@/lib/booking'

export async function GET() {
  try {
    const booking = await getSiteBooking()
    return NextResponse.json(booking, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
      },
    })
  } catch {
    return NextResponse.json({ status: 'free' as const }, { status: 200 })
  }
}
