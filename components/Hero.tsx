export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '40px 40px 60px',
        overflow: 'hidden',
      }}
    >
      {/* Background texture rings */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '-5%',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        border: '1px solid rgba(212, 201, 168, 0.5)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        top: '5%',
        right: '-10%',
        width: '750px',
        height: '750px',
        borderRadius: '50%',
        border: '1px solid rgba(212, 201, 168, 0.25)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        top: '0%',
        right: '-15%',
        width: '900px',
        height: '900px',
        borderRadius: '50%',
        border: '1px solid rgba(212, 201, 168, 0.12)',
        pointerEvents: 'none',
      }} />

      {/* Right-side art composition */}
      <div
        className="hero-right-art"
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: 'clamp(20px, 5vw, 72px)',
          top: '22%',
          width: 'clamp(210px, 24vw, 320px)',
          height: 'clamp(280px, 36vh, 420px)',
          pointerEvents: 'none',
        }}
      >
        <div style={{
          position: 'absolute',
          inset: 0,
          border: '1px solid rgba(212, 201, 168, 0.42)',
          borderRadius: '16px',
          background: 'linear-gradient(160deg, rgba(245, 240, 232, 0.35), rgba(245, 240, 232, 0.08))',
          backdropFilter: 'blur(2px)',
        }} />
        <div style={{
          position: 'absolute',
          width: '58%',
          aspectRatio: '1 / 1',
          top: '-10%',
          right: '-10%',
          borderRadius: '50%',
          border: '1px solid rgba(196, 98, 45, 0.45)',
        }} />
        <div style={{
          position: 'absolute',
          width: '62px',
          height: '62px',
          border: '1px solid rgba(212, 201, 168, 0.75)',
          borderRadius: '8px',
          left: '-20px',
          bottom: '26%',
          transform: 'rotate(15deg)',
          background: 'rgba(245, 240, 232, 0.25)',
        }} />
        <div style={{
          position: 'absolute',
          left: '16px',
          bottom: '16px',
          right: '16px',
          border: '1px solid rgba(26, 20, 16, 0.1)',
          borderRadius: '8px',
          background: 'rgba(245, 240, 232, 0.82)',
          padding: '12px 14px',
        }}>
          <span style={{
            display: 'block',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.62rem',
            letterSpacing: '0.13em',
            textTransform: 'uppercase',
            color: 'var(--rust)',
            marginBottom: '8px',
          }}>
            Crafting Systems
          </span>
          <span style={{
            display: 'block',
            fontFamily: 'var(--font-body)',
            fontSize: '0.88rem',
            color: 'var(--ink-light)',
            lineHeight: 1.45,
          }}>
            API architecture, AI workflows, and operational automation.
          </span>
        </div>
      </div>

      {/* Top label */}
      <div
        className="hero-animate hero-animate-1 hero-top-label"
        style={{
          position: 'absolute',
          top: 'clamp(64px, 8vh, 110px)',
          left: '60px',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
        }}
      >
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'var(--rust)',
        }}>
          Backend Systems · AI Automation
        </span>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.65rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--parchment-text)',
        }}>
          Accra · Ghana · Serving teams globally
        </span>
      </div>

      {/* Main heading */}
      <div
        className="hero-heading-wrap"
        style={{
          maxWidth: '1100px',
          position: 'relative',
          paddingTop: 'clamp(96px, 14vh, 170px)',
        }}
      >
        <h1
          className="hero-animate hero-animate-2"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3.2rem, 10vw, 9rem)',
            fontWeight: 700,
            lineHeight: 0.9,
            color: 'var(--ink)',
            letterSpacing: '-0.02em',
            marginBottom: '0.1em',
          }}
        >
          Eliminating
        </h1>
        <h1
          className="hero-animate hero-animate-3"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3.2rem, 10vw, 9rem)',
            fontWeight: 300,
            fontStyle: 'italic',
            lineHeight: 0.9,
            color: 'var(--rust)',
            letterSpacing: '-0.02em',
          }}
        >
          manual
        </h1>
        <h1
          className="hero-animate hero-animate-4"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3.2rem, 10vw, 9rem)',
            fontWeight: 700,
            lineHeight: 0.9,
            color: 'var(--ink)',
            letterSpacing: '-0.02em',
          }}
        >
          bottlenecks.
        </h1>

        {/* Subtext row */}
        <div
          className="hero-animate hero-animate-5"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
            marginTop: '48px',
            flexWrap: 'wrap',
          }}
        >
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.15rem',
            color: 'var(--ink-light)',
            maxWidth: '560px',
            lineHeight: 1.6,
          }}>
            I help health, legal, and real estate teams cut manual operations and response times with custom backend systems and AI automation
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a
              href="#services"
              className="hero-primary-cta"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--cream)',
                background: 'var(--ink)',
                padding: '14px 28px',
                textDecoration: 'none',
                borderRadius: '2px',
                transition: 'background 0.3s, transform 0.3s',
                display: 'inline-block',
              }}
            >
              Explore services
            </a>
          </div>
        </div>
      </div>

      {/* Bottom right scroll indicator */}
      <div
        className="hero-animate hero-animate-6"
        style={{
          position: 'absolute',
          bottom: '80px',
          right: '40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.65rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'var(--parchment-text)',
          writingMode: 'vertical-rl',
        }}>
          Scroll
        </span>
        <div style={{
          width: '1px',
          height: '60px',
          background: 'linear-gradient(to bottom, var(--parchment), transparent)',
          animation: 'fadeSlideUp 2s ease infinite',
        }} />
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .hero-right-art { display: none; }
        }
        @media (max-width: 768px) {
          section#hero {
            padding: 0 24px 48px !important;
            min-height: auto !important;
            justify-content: flex-start !important;
          }
          .hero-top-label {
            position: relative !important;
            top: auto !important;
            left: auto !important;
            margin-top: 80px;
          }
          .hero-heading-wrap { padding-top: 32px !important; }
        }
        @media (max-width: 480px) {
          .hero-top-label { margin-top: 72px; }
          .hero-heading-wrap { padding-top: 24px !important; }
        }
      `}</style>
    </section>
  )
}
