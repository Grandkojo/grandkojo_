export default function About() {
  return (
    <section
      id="about"
      data-motion="medium"
      style={{
        padding: 'clamp(80px, 12vw, 140px) 40px',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        className="about-art about-art-ring motion-layer motion-layer-medium"
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: '-40px',
          top: '40px',
          width: 'clamp(180px, 22vw, 280px)',
          aspectRatio: '1 / 1',
          borderRadius: '50%',
          border: '1px solid rgba(196, 98, 45, 0.22)',
          pointerEvents: 'none',
        }}
      />
      <div
        className="about-art about-art-frame motion-layer motion-layer-fast"
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: '20px',
          top: '130px',
          width: 'clamp(120px, 16vw, 190px)',
          height: 'clamp(160px, 24vw, 250px)',
          border: '1px solid rgba(212, 201, 168, 0.45)',
          borderRadius: '10px',
          transform: 'rotate(7deg)',
          background: 'linear-gradient(160deg, rgba(245, 240, 232, 0.36), rgba(245, 240, 232, 0.08))',
          pointerEvents: 'none',
        }}
      />
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.5fr',
        gap: '56px',
        alignItems: 'start',
      }}
      className="about-grid"
      >
        {/* Left column: positioning */}
        <div className="reveal reveal-left">
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--rust)',
            display: 'block',
            marginBottom: '24px',
          }}>
            01 — About
          </span>

          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)',
            lineHeight: 1.2,
            color: 'var(--ink)',
            marginBottom: '18px',
          }}>
            Backend and AI automation partner for operations-heavy teams.
          </p>

          <div style={{
            padding: '22px',
            background: 'var(--warm)',
            border: '1px solid var(--parchment)',
            borderRadius: '8px',
          }}>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--rust)',
              display: 'block',
              marginBottom: '16px',
            }}>
              Best Fit
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'Teams', value: 'Health, legal, and real estate operators' },
                { label: 'Problem', value: 'Manual approvals, scattered tools, and avoidable delays' },
                { label: 'Build', value: 'Reliable backend workflows and practical AI automations' },
                { label: 'Engagement', value: 'Project-based delivery with clear scope and handoff' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', gap: '12px', alignItems: 'baseline' }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.08em',
                    color: 'var(--parchment-text)',
                    minWidth: '70px',
                    textTransform: 'uppercase',
                  }}>
                    {item.label}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    color: 'var(--ink-light)',
                    fontStyle: 'italic',
                  }}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            marginTop: '16px',
            padding: '18px 20px',
            border: '1px solid var(--parchment)',
            borderRadius: '8px',
            background: 'rgba(245, 240, 232, 0.5)',
          }}>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.64rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--parchment-text)',
              marginBottom: '10px',
            }}>
              Typical Outcomes
            </p>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.92rem',
              color: 'var(--ink-light)',
              lineHeight: 1.65,
            }}>
              Faster response cycles, fewer workflow errors, and less time spent chasing repetitive tasks.
            </p>
          </div>
        </div>

        {/* Right column: narrative */}
        <div className="reveal" style={{ paddingTop: '34px' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.1rem, 4.2vw, 3.4rem)',
            fontWeight: 600,
            color: 'var(--ink)',
            lineHeight: 1.15,
            marginBottom: '26px',
            letterSpacing: '-0.01em',
          }}>
            Replace fragile operations with systems your team can trust.
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              `I help teams move from spreadsheet-driven operations to production-ready workflows. Each build is designed around real day-to-day bottlenecks, not generic templates.`,
              `You get direct technical ownership from planning to delivery: backend architecture, automation logic, and integration work that reduces manual effort and improves execution speed.`,
              `Based in Accra and working remotely, I deliver practical systems with measurable outcomes and clean handoff documentation.`,
            ].map((para, i) => (
              <p key={i} style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                color: 'var(--ink-light)',
                lineHeight: 1.72,
              }}>
                {para}
              </p>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '10px', marginTop: '30px', flexWrap: 'wrap' }}>
            {[
              'Team size: 2-20',
              'Budget range: $150-$5,000',
              'Primary market: Ghana / West Africa',
              'Delivery mode: remote-friendly',
            ].map(badge => (
              <span key={badge} style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--ink-light)',
                padding: '6px 14px',
                border: '1px solid var(--parchment)',
                borderRadius: '2px',
              }}>
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          section#about { padding: 80px 24px !important; }
          .about-art-ring {
            right: -64px !important;
            top: 12px !important;
            width: 170px !important;
            opacity: 0.5;
          }
          .about-art-frame {
            right: -8px !important;
            top: 72px !important;
            width: 110px !important;
            height: 150px !important;
            opacity: 0.55;
          }
        }
      `}</style>
    </section>
  )
}
