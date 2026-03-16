const items = [
  'Health Teams', '·', 'Legal Teams', '·', 'Real Estate Teams', '·',
  'API Build Sprint', '·', 'AI Feature Integration', '·', 'Process Automation Build', '·',
  'Less Manual Work', '·', 'Faster Operations', '·', 'Reliable Workflows', '·',
  'Health Teams', '·', 'Legal Teams', '·', 'Real Estate Teams', '·',
  'API Build Sprint', '·', 'AI Feature Integration', '·', 'Process Automation Build', '·',
  'Less Manual Work', '·', 'Faster Operations', '·', 'Reliable Workflows', '·',
]

export default function Ticker() {
  return (
    <div style={{
      overflow: 'hidden',
      borderTop: '1px solid var(--parchment)',
      borderBottom: '1px solid var(--parchment)',
      padding: '16px 0',
      background: 'var(--warm)',
    }}>
      <div className="marquee-track">
        {items.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: item === '·' ? 'serif' : 'var(--font-mono)',
              fontSize: item === '·' ? '1rem' : '0.72rem',
              letterSpacing: item === '·' ? '0' : '0.1em',
              textTransform: 'uppercase',
              color: item === '·' ? 'var(--rust)' : 'var(--ink-light)',
              padding: '0 16px',
              whiteSpace: 'nowrap',
              opacity: item === '·' ? 0.8 : 1,
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
