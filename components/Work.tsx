import Link from 'next/link'
import type { CaseStudyItem } from '@/lib/content'

interface WorkProps {
  projects: CaseStudyItem[]
}

export default function Work({ projects }: WorkProps) {
  return (
    <section
      id="work"
      style={{
        padding: 'clamp(80px, 12vw, 140px) 40px',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        className="work-art work-art-grid"
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: '8px',
          top: '20px',
          width: 'clamp(110px, 15vw, 180px)',
          height: 'clamp(110px, 15vw, 180px)',
          borderRadius: '10px',
          border: '1px solid rgba(212, 201, 168, 0.5)',
          backgroundImage:
            'linear-gradient(rgba(212, 201, 168, 0.24) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 201, 168, 0.24) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          pointerEvents: 'none',
        }}
      />
      <div
        className="work-art work-art-dot"
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: '28px',
          top: '220px',
          width: '14px',
          height: '14px',
          borderRadius: '50%',
          background: 'var(--rust)',
          opacity: 0.7,
          pointerEvents: 'none',
        }}
      />
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: '72px',
        flexWrap: 'wrap',
        gap: '24px',
      }}>
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
            03 — Proof of Work
          </span>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 600,
            color: 'var(--ink)',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
          }}>
            Case studies with<br />
            <span style={{ fontStyle: 'italic', fontWeight: 300 }}>real impact.</span>
          </h2>
        </div>
      </div>

      {/* Project list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {projects.map((project, i) => (
          <Link
            key={project.title}
            href={`/case-studies/${project.slug}`}
            className={`reveal stagger-${i + 1} work-project-card`}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              alignItems: 'center',
              gap: '32px',
              padding: '36px 40px',
              background: 'transparent',
              border: '1px solid var(--parchment)',
              borderRadius: '4px',
              textDecoration: 'none',
              transition: 'background 0.35s, border-color 0.35s, transform 0.35s',
              cursor: 'pointer',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                  fontWeight: 600,
                  color: 'var(--ink)',
                  letterSpacing: '-0.01em',
                }}>
                  {project.title}
                </h3>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--rust)',
                  padding: '3px 10px',
                  border: '1px solid var(--rust)',
                  borderRadius: '20px',
                  opacity: 0.7,
                }}>
                  {project.category}
                </span>
              </div>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                color: 'var(--ink-light)',
                lineHeight: 1.65,
                maxWidth: '600px',
              }}>
                {project.description}
              </p>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.64rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--rust)',
              }}>
                {project.metric}
              </span>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {project.stack.map(t => (
                  <span key={t} style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.62rem',
                    letterSpacing: '0.07em',
                    textTransform: 'uppercase',
                    color: 'var(--parchment)',
                    background: 'var(--ink)',
                    padding: '3px 10px',
                    borderRadius: '2px',
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2rem',
              color: 'var(--parchment)',
              transition: 'color 0.3s, transform 0.3s',
              flexShrink: 0,
            }}>
              →
            </div>
          </Link>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          section#work { padding: 80px 24px !important; }
          .work-art-grid {
            width: 110px !important;
            height: 110px !important;
            right: -18px !important;
            top: 8px !important;
            opacity: 0.5;
          }
          .work-art-dot {
            right: 14px !important;
            top: 122px !important;
            width: 10px !important;
            height: 10px !important;
          }
        }
      `}</style>
    </section>
  )
}
