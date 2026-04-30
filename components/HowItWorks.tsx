import type { SiteBooking } from '@/lib/booking'

const HOW_IT_WORKS_VIDEO_URL = process.env.HOW_IT_WORKS_VIDEO_URL || 'https://youtu.be/Hfm94aHAbYQ?si=LJE487C7glIait65'
const CALENDLY_URL = 'https://calendly.com/essienernest-kojoowusu/30min'

function getYouTubeVideoId(url: string): string {
  const trimmed = url.trim()

  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
    return trimmed
  }

  try {
    const parsed = new URL(trimmed)
    const host = parsed.hostname.replace('www.', '')

    if (host === 'youtu.be') {
      return parsed.pathname.replace('/', '')
    }

    if (host === 'youtube.com' || host === 'm.youtube.com') {
      if (parsed.pathname === '/watch') {
        return parsed.searchParams.get('v') || ''
      }

      if (parsed.pathname.startsWith('/embed/')) {
        return parsed.pathname.split('/embed/')[1] || ''
      }
    }
  } catch {
    return ''
  }

  return ''
}

function isValidHttpUrl(url: string): boolean {
  try {
    const parsed = new URL(url.trim())
    return parsed.protocol === 'http:' || parsed.protocol === 'https:'
  } catch {
    return false
  }
}

export default function HowItWorks({ booking }: { booking?: SiteBooking }) {
  const isBooked = booking?.status === 'booked'
  const normalizedVideoUrl = HOW_IT_WORKS_VIDEO_URL.trim()
  const videoId = getYouTubeVideoId(normalizedVideoUrl)
  const embedUrl = videoId
    ? `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1&autoplay=1&mute=1`
    : ''
  const hasDirectVideoUrl = !videoId && isValidHttpUrl(normalizedVideoUrl)
  const watchUrl = videoId ? `https://www.youtube.com/watch?v=${videoId}` : normalizedVideoUrl

  return (
    <section
      id="how-it-works"
      style={{
        padding: 'clamp(70px, 11vw, 120px) 40px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <div style={{ marginBottom: '28px' }} className="reveal">
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--rust)',
            display: 'block',
            marginBottom: '16px',
          }}
        >
          02 — How It Works
        </span>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            color: 'var(--ink)',
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
            marginBottom: '14px',
          }}
        >
          What working with me looks like, in under a minute.
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            lineHeight: 1.7,
            color: 'var(--ink-light)',
            maxWidth: '760px',
          }}
        >
          Watch this quick walkthrough to see how I turn manual team operations into stable backend and AI-powered
          workflows.
        </p>
      </div>

      <div className="reveal" style={{ marginBottom: '24px' }}>
        <div
          style={{
            position: 'relative',
            width: '100%',
            paddingTop: '56.25%',
            border: '1px solid var(--parchment)',
            borderRadius: '8px',
            overflow: 'hidden',
            background: '#000',
          }}
        >
          {embedUrl ? (
            <iframe
              src={embedUrl}
              title="How it works walkthrough"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                border: 'none',
              }}
            />
          ) : hasDirectVideoUrl ? (
            <video
              autoPlay
              muted
              playsInline
              controls
              preload="metadata"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                border: 'none',
                background: '#000',
              }}
              src={normalizedVideoUrl}
            >
              <track kind="captions" />
            </video>
          ) : (
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'grid',
                placeItems: 'center',
                color: 'var(--cream)',
                fontFamily: 'var(--font-body)',
              }}
            >
              Invalid video URL.
            </div>
          )}
        </div>
        <p
          style={{
            marginTop: '10px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.66rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--parchment-text)',
          }}
        >
          If the player is blocked,{' '}
          <a
            href={watchUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--rust)' }}
          >
            {videoId ? 'watch on YouTube' : 'open the video link'}
          </a>
          .
        </p>
      </div>

      <div
        className="reveal"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '12px',
          marginBottom: '24px',
        }}
      >
        {[
          {
            step: '01',
            title: 'Audit',
            text: 'Map your current process and identify where delays, errors, and manual rework happen.',
          },
          {
            step: '02',
            title: 'Build',
            text: 'Design and implement backend workflows plus AI automations tailored to your operation.',
          },
          {
            step: '03',
            title: 'Handoff',
            text: 'Ship, document, and transfer ownership so your team can run the system confidently.',
          },
        ].map((item) => (
          <div
            key={item.step}
            style={{
              border: '1px solid var(--parchment)',
              borderRadius: '6px',
              padding: '16px',
              background: 'rgba(245, 240, 232, 0.35)',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.66rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--rust)',
                marginBottom: '8px',
              }}
            >
              Step {item.step}
            </p>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.3rem',
                color: 'var(--ink)',
                marginBottom: '8px',
              }}
            >
              {item.title}
            </h3>
            <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-light)', lineHeight: 1.6 }}>{item.text}</p>
          </div>
        ))}
      </div>

      {isBooked ? (
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            letterSpacing: '0.09em',
            textTransform: 'uppercase',
            color: 'var(--ink-light)',
            border: '1px solid rgba(26, 26, 26, 0.2)',
            padding: '10px 18px',
            borderRadius: '2px',
            display: 'inline-block',
            maxWidth: '420px',
            lineHeight: 1.5,
          }}
        >
          Project calls are paused.
          {booking?.reachBackAt
            ? ` Check back after ${booking.reachBackAt}.`
            : ' New booking windows will be announced here.'}
        </p>
      ) : (
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            letterSpacing: '0.09em',
            textTransform: 'uppercase',
            color: 'var(--cream)',
            background: 'var(--ink)',
            padding: '10px 18px',
            textDecoration: 'none',
            borderRadius: '2px',
            display: 'inline-block',
          }}
        >
          Book a project call
        </a>
      )}

      <style>{`
        @media (max-width: 768px) {
          section#how-it-works { padding: 72px 24px !important; }
        }
      `}</style>
    </section>
  )
}
