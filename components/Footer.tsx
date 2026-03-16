export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{
      borderTop: '1px solid var(--parchment)',
      padding: '32px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '16px',
    }}>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'baseline' }}>
        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1rem',
          fontWeight: 600,
          color: 'var(--ink)',
        }}>
          grandkojo
        </span>
        <span style={{ color: 'var(--rust)' }}>·</span>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.65rem',
          color: 'var(--parchment-text)',
          letterSpacing: '0.08em',
        }}>
          Accra, Ghana
        </span>
      </div>

      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.65rem',
        letterSpacing: '0.08em',
        color: 'var(--parchment-text)',
      }}>
        © {year} Ernest Kojo Owusu Essien
      </span>

      <div style={{ display: 'flex', gap: '24px' }}>
        {[
          { label: 'Portfolio', href: 'https://portfolio.grandkojo.my' },
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
              fontSize: '0.65rem',
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

      <style>{`
        @media (max-width: 600px) {
          footer { padding: 32px 24px; flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </footer>
  )
}
