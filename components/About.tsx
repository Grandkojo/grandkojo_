export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: 'clamp(80px, 12vw, 140px) 40px',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        className="about-art about-art-ring"
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
        className="about-art about-art-frame"
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
        gridTemplateColumns: '1fr 1.6fr',
        gap: '80px',
        alignItems: 'start',
      }}
      className="about-grid"
      >
        {/* Left: Label + large number */}
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

          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(5rem, 10vw, 9rem)',
            fontWeight: 700,
            lineHeight: 0.85,
            color: 'var(--warm)',
            letterSpacing: '-0.03em',
            userSelect: 'none',
            WebkitTextStroke: '1px var(--parchment)',
          }}>
            Grandkojo
          </div>

          {/* Currently doing */}
          <div style={{
            marginTop: '48px',
            padding: '24px',
            background: 'var(--warm)',
            border: '1px solid var(--parchment)',
            borderRadius: '4px',
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
              Positioning
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'Who', value: 'Health, legal, and real estate teams' },
                { label: 'Pain', value: 'Manual forms, spreadsheets, and repetitive workflows' },
                { label: 'Fix', value: 'Custom backend systems + AI-powered automation' },
                { label: 'Status', value: 'Open for project-based engagements' },
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
        </div>

        {/* Right: Bio text */}
        <div className="reveal" style={{ paddingTop: '60px' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 600,
            color: 'var(--ink)',
            lineHeight: 1.15,
            marginBottom: '32px',
            letterSpacing: '-0.01em',
          }}>
            High-leverage systems for teams that have outgrown{' '}
            <span style={{ color: 'var(--rust)', fontStyle: 'italic' }}>manual work</span>.
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              `I design and ship software systems that replace slow, fragile operations with reliable workflows your team can actually trust. The focus is practical: less manual overhead, fewer errors, and faster execution.`,
              `Most of my work serves small teams in health, legal, and real estate environments where one broken process can stall the whole business. I work with stakeholders directly, then translate operational pain into clear technical delivery.`,
              `Based in Accra and remote-friendly, I deliver build-focused engagements with clear scope, measurable outcomes, and handoff-ready systems your team can run after launch.`,
            ].map((para, i) => (
              <p key={i} style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.05rem',
                color: 'var(--ink-light)',
                lineHeight: 1.75,
              }}>
                {para}
              </p>
            ))}
          </div>

          {/* Education badges */}
          <div style={{ display: 'flex', gap: '12px', marginTop: '40px', flexWrap: 'wrap' }}>
            {[
              'Team size: 2-20',
              'Project budgets: $150-$5,000',
              'Primary market: Ghana / West Africa',
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
