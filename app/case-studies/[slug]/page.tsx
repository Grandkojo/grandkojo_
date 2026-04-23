import Link from 'next/link'
import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import CaseStudyPhotoGallery from '@/components/CaseStudyPhotoGallery'
import { getCaseStudiesData } from '@/lib/site-data'

interface CaseStudyPageProps {
  params: {
    slug: string
  }
}

function getYouTubeEmbedUrl(input?: string): string | null {
  if (!input) {
    return null
  }

  const value = input.trim()
  if (!value) {
    return null
  }

  try {
    const parsed = new URL(value)
    const host = parsed.hostname.replace('www.', '')

    if (host === 'youtu.be') {
      const id = parsed.pathname.replace('/', '')
      return id ? `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1` : null
    }

    if (host === 'youtube.com' || host === 'm.youtube.com') {
      if (parsed.pathname === '/watch') {
        const id = parsed.searchParams.get('v')
        return id ? `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1` : null
      }

      if (parsed.pathname.startsWith('/embed/')) {
        const id = parsed.pathname.split('/embed/')[1]
        return id ? `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1` : null
      }
    }
  } catch {
    return null
  }

  return null
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const caseStudies = await getCaseStudiesData()
  const caseStudy = caseStudies.find((item) => item.slug === params.slug)

  if (!caseStudy) {
    notFound()
  }

  const photos = Array.isArray(caseStudy.photos) ? caseStudy.photos.slice(0, 5) : []
  const hasPhotos = photos.length > 0
  const hasVideo = typeof caseStudy.videoUrl === 'string' && caseStudy.videoUrl.length > 0
  const youtubeEmbedUrl = getYouTubeEmbedUrl(caseStudy.videoUrl)

  return (
    <>
      <Nav />
      <main
        style={{
          maxWidth: '980px',
          margin: '0 auto',
          padding: '140px 40px 100px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            marginBottom: '22px',
          }}
        >
          <Link
            href="/#work"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--rust)',
              textDecoration: 'none',
            }}
          >
            ← Back to case studies
          </Link>

          <span
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--rust)',
              border: '1px solid var(--rust)',
              borderRadius: '99px',
              padding: '4px 12px',
            }}
          >
            {caseStudy.category}
          </span>
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.2rem, 6vw, 4.6rem)',
            lineHeight: 1,
            letterSpacing: '-0.02em',
            color: 'var(--ink)',
            marginBottom: '24px',
          }}
        >
          {caseStudy.title}
        </h1>

      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '1.08rem',
          lineHeight: 1.8,
          color: 'var(--ink-light)',
          maxWidth: '760px',
          marginBottom: '34px',
        }}
      >
        {caseStudy.solution}
      </p>

      {hasVideo ? (
        <section style={{ marginBottom: '44px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.6rem, 3.5vw, 2.3rem)',
              color: 'var(--ink)',
              marginBottom: '14px',
            }}
          >
            Video Walkthrough
          </h2>
          {youtubeEmbedUrl ? (
            <div
              style={{
                position: 'relative',
                width: '100%',
                paddingTop: '56.25%',
                borderRadius: '6px',
                overflow: 'hidden',
                border: '1px solid var(--parchment)',
                background: '#000',
              }}
            >
              <iframe
                src={youtubeEmbedUrl}
                title={`${caseStudy.title} video walkthrough`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
              />
            </div>
          ) : (
            <video
              controls
              preload="metadata"
              style={{
                width: '100%',
                borderRadius: '6px',
                border: '1px solid var(--parchment)',
                background: '#000',
              }}
              src={caseStudy.videoUrl}
            >
              <track kind="captions" />
            </video>
          )}
        </section>
      ) : null}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px',
          marginBottom: '44px',
        }}
      >
        <div
          style={{
            border: '1px solid var(--parchment)',
            padding: '18px',
            borderRadius: '4px',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.66rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--parchment-text)',
              marginBottom: '8px',
            }}
          >
            Core Result
          </p>
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink)' }}>{caseStudy.metric}</p>
        </div>
      </div>

      <section style={{ marginBottom: '34px' }}>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.6rem, 3.5vw, 2.3rem)',
            color: 'var(--ink)',
            marginBottom: '12px',
          }}
        >
          Challenge
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-light)', lineHeight: 1.8 }}>
          {caseStudy.challenge}
        </p>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.6rem, 3.5vw, 2.3rem)',
            color: 'var(--ink)',
            marginBottom: '12px',
          }}
        >
          Outcome
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-light)', lineHeight: 1.8 }}>
          {caseStudy.outcome}
        </p>
      </section>

      {hasPhotos ? (
        <section style={{ marginBottom: '44px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.6rem, 3.5vw, 2.3rem)',
              color: 'var(--ink)',
              marginBottom: '14px',
            }}
          >
            Project Photos
          </h2>
          <CaseStudyPhotoGallery title={caseStudy.title} photos={photos} />
        </section>
      ) : null}

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {caseStudy.stack.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.62rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--cream)',
                background: 'var(--ink)',
                padding: '4px 10px',
                borderRadius: '2px',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </main>
    </>
  )
}
