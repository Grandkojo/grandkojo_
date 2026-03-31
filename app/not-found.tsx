import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <>
      <Nav />
      <main
        style={{
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px 24px 120px',
        }}
      >
        <div style={{ maxWidth: 560, textAlign: 'center' }}>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--parchment-text)',
              marginBottom: 12,
            }}
          >
            404 · Page not found
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 4vw, 3rem)',
              lineHeight: 1.05,
              color: 'var(--ink)',
              marginBottom: 16,
            }}
          >
            That path doesn&apos;t live here.
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              color: 'var(--ink-light)',
              marginBottom: 28,
              lineHeight: 1.6,
            }}
          >
            The page you were looking for couldn&apos;t be found. Head back to the homepage or explore services.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--cream)',
                background: 'var(--ink)',
                padding: '14px 28px',
                textDecoration: 'none',
                borderRadius: 2,
              }}
            >
              Back to home
            </Link>
            <Link
              href="#services"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--ink)',
                border: '1px solid var(--parchment)',
                padding: '14px 28px',
                textDecoration: 'none',
                borderRadius: 2,
              }}
            >
              Explore services
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

