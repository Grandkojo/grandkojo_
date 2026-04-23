export default function Connect() {
  const CALENDLY_URL = 'https://calendly.com/essienernest-kojoowusu/30min'

  return (
    <section
      id="connect"
      data-motion="slow"
      style={{
        padding: 'clamp(48px, 7vw, 84px) 40px clamp(80px, 12vw, 140px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Large watermark */}
      <div
        className="connect-watermark motion-layer motion-layer-slow"
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-40px',
          left: '-20px',
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(8rem, 18vw, 18rem)',
          fontWeight: 700,
          color: 'transparent',
          WebkitTextStroke: '1px rgba(212, 201, 168, 0.2)',
          lineHeight: 1,
          userSelect: 'none',
          letterSpacing: '-0.03em',
          pointerEvents: 'none',
        }}
      >
        Hello.
      </div>
      <div
        className="connect-art connect-art-arch motion-layer motion-layer-medium"
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: '-50px',
          top: '72px',
          width: 'clamp(180px, 22vw, 300px)',
          height: 'clamp(180px, 22vw, 300px)',
          borderRadius: '50%',
          border: '1px dashed rgba(196, 98, 45, 0.35)',
          pointerEvents: 'none',
        }}
      />
      <div
        className="connect-art connect-art-line motion-layer motion-layer-fast"
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: '56px',
          top: '130px',
          width: '1px',
          height: '120px',
          background: 'linear-gradient(to bottom, rgba(212, 201, 168, 0), rgba(212, 201, 168, 0.75), rgba(212, 201, 168, 0))',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative' }}>
        <div className="reveal">
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--rust)',
            display: 'block',
            marginBottom: '16px',
          }}>
            04 — Start a Project
          </span>
        </div>

        <h2
          className="reveal"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            fontWeight: 600,
            color: 'var(--ink)',
            lineHeight: 1,
            letterSpacing: '-0.03em',
            marginBottom: '48px',
          }}
        >
          Ready to replace{' '}
          <span style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--rust)' }}>manual</span>
          <br />
          bottlenecks?
        </h2>

        <div
          className="reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'start',
          }}
          id="connect-grid"
        >
          <div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.1rem',
              color: 'var(--ink-light)',
              lineHeight: 1.75,
              marginBottom: '40px',
            }}>
              If you or your team is spending too much time on repetitive operations, let&apos;s scope a practical system that saves time and reduces errors.
            </p>

            <a
              href="mailto:essienernest.kojoowusu@gmail.com"
              className="link-underline"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1rem, 2vw, 1.4rem)',
                fontWeight: 600,
                color: 'var(--ink)',
                textDecoration: 'none',
                display: 'block',
                marginBottom: '32px',
              }}
            >
              essienernest.kojoowusu@gmail.com
            </a>

            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.66rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--parchment-text)',
                marginBottom: '26px',
                display: 'inline-block',
                textDecoration: 'none',
              }}
            >
              Book a 30-min call on Calendly
            </a>

            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              {[
                { label: 'GitHub', href: 'https://github.com/Grandkojo' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ernest-essien-kojo' },
              ].map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--ink-light)',
                    textDecoration: 'none',
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Availability card */}
          <div style={{
            background: 'var(--ink)',
            padding: '40px',
            borderRadius: '4px',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: 'var(--rust)',
              opacity: 0.1,
            }} />
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '24px',
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#4CAF50',
                boxShadow: '0 0 10px rgba(76, 175, 80, 0.6)',
                animation: 'pulse 2s infinite',
              }} />
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#4CAF50',
              }}>
                Open for new engagements
              </span>
            </div>

            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              color: 'rgba(245, 240, 232, 0.6)',
              lineHeight: 1.7,
              marginBottom: '32px',
            }}>
              Ideal for health, legal, and real estate teams with 2-20 people that need dependable systems, not just prototypes.
            </p>

            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="connect-cta-button"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--ink)',
                background: 'var(--cream)',
                padding: '12px 24px',
                textDecoration: 'none',
                borderRadius: '2px',
                display: 'inline-block',
                transition: 'background 0.3s',
              }}
            >
              Book discovery call
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @media (max-width: 768px) {
          #connect-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          section#connect { padding: 56px 24px 80px !important; }
          .connect-art-arch {
            width: 150px !important;
            height: 150px !important;
            top: 24px !important;
            left: -72px !important;
            opacity: 0.5;
          }
          .connect-art-line {
            height: 84px !important;
            top: 84px !important;
            left: 18px !important;
            opacity: 0.65;
          }
        }
      `}</style>
    </section>
  )
}
