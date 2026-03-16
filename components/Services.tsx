const services = [
  {
    number: '01',
    title: 'API Build Sprint',
    description: 'From architecture to deployment, I build production-ready backend systems and REST APIs that give your product a reliable core.',
    timeline: 'Typical timeline: 2-4 weeks',
    tags: ['Django', 'Laravel', 'FastAPI', 'Java', 'PostgreSQL'],
  },
  {
    number: '02',
    title: 'AI Feature Integration',
    description: 'I integrate LLM-powered capabilities into existing tools and workflows so your team can automate high-friction decisions and repetitive tasks.',
    timeline: 'Typical timeline: 1-3 weeks',
    tags: ['LLM Integrations', 'Gemini API', 'RAG', 'Prompt Workflows'],
  },
  {
    number: '03',
    title: 'Process Automation Build',
    description: 'I replace spreadsheet-and-WhatsApp workflows with tailored internal tools that reduce manual steps and make operations predictable.',
    timeline: 'Typical timeline: scoped per workflow',
    tags: ['Workflow Design', 'Internal Tools', 'Automation', 'Web Apps'],
  },
]

export default function Services() {
  return (
    <section
      id="services"
      style={{
        padding: 'clamp(80px, 12vw, 140px) 40px',
        background: 'var(--ink)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Texture overlay on dark bg */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
        pointerEvents: 'none',
      }} />
      <div
        className="services-art services-art-ring"
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: '-120px',
          top: '18%',
          width: 'clamp(260px, 34vw, 480px)',
          aspectRatio: '1 / 1',
          borderRadius: '50%',
          border: '1px solid rgba(212, 201, 168, 0.18)',
          pointerEvents: 'none',
        }}
      />
      <div
        className="services-art services-art-pill"
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: '24px',
          bottom: '44px',
          width: 'clamp(96px, 11vw, 140px)',
          height: 'clamp(32px, 4vw, 46px)',
          borderRadius: '999px',
          border: '1px solid rgba(201, 151, 58, 0.45)',
          background: 'rgba(201, 151, 58, 0.08)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '80px',
          flexWrap: 'wrap',
          gap: '24px',
        }}>
          <div className="reveal">
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              display: 'block',
              marginBottom: '16px',
            }}>
              02 — Services
            </span>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 600,
              color: 'var(--cream)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
            }}>
              Offers built for<br />
              <span style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--gold)' }}>measurable outcomes.</span>
            </h2>
          </div>
          <p className="reveal" style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            color: 'rgba(212, 201, 168, 0.6)',
            maxWidth: '380px',
            lineHeight: 1.7,
          }}>
            Project-based engagements for teams ready to move fast. Most builds typically fit within a $150-$5,000 scope depending on complexity.
          </p>
        </div>

        {/* Service cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '2px',
        }}
        className="services-grid"
        >
          {services.map((service, i) => (
            <div
              key={service.number}
              className={`reveal card-lift stagger-${i + 1}`}
              style={{
                padding: '48px 40px',
                border: '1px solid rgba(212, 201, 168, 0.1)',
                background: 'rgba(245, 240, 232, 0.03)',
                borderRadius: '4px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                cursor: 'default',
              }}
            >
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.12em',
                color: 'var(--gold)',
                opacity: 0.6,
              }}>
                {service.number}
              </span>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.8rem',
                fontWeight: 600,
                color: 'var(--cream)',
                letterSpacing: '-0.01em',
                lineHeight: 1.1,
              }}>
                {service.title}
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                color: 'rgba(212, 201, 168, 0.65)',
                lineHeight: 1.7,
                flexGrow: 1,
              }}>
                {service.description}
              </p>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'rgba(212, 201, 168, 0.55)',
              }}>
                {service.timeline}
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {service.tags.map(tag => (
                  <span key={tag} style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.62rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'rgba(212, 201, 168, 0.4)',
                    padding: '4px 10px',
                    border: '1px solid rgba(212, 201, 168, 0.12)',
                    borderRadius: '2px',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .services-grid { grid-template-columns: 1fr !important; }
          section#services { padding: 80px 24px !important; }
          .services-art-ring {
            width: 220px !important;
            left: -100px !important;
            top: 24px !important;
            opacity: 0.55;
          }
          .services-art-pill {
            width: 110px !important;
            height: 34px !important;
            right: 12px !important;
            bottom: 22px !important;
            opacity: 0.75;
          }
        }
      `}</style>
    </section>
  )
}
