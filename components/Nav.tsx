'use client'
import { useState, useEffect } from 'react'

const links = [
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Work', href: '/#work' },
  { label: 'Connect', href: '/#connect' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav
        className="site-nav"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? '14px 40px' : '28px 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'padding 0.5s cubic-bezier(0.16, 1, 0.3, 1), background 0.5s cubic-bezier(0.16, 1, 0.3, 1), backdrop-filter 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          background: scrolled ? 'rgba(245, 240, 232, 0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(212, 201, 168, 0.5)' : '1px solid transparent',
        }}
      >
        {/* Logo */}
        <a
          href="/"
          style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.2rem',
          fontWeight: 400,
          color: 'var(--ink)',
          textDecoration: 'none',
          letterSpacing: '0.02em',
          flexShrink: 0,
          }}
        >
          grandkojo
          <span style={{ color: 'var(--rust)', marginLeft: '2px' }}>.</span>
        </a>

        {/* Desktop links — hidden via CSS below 769px */}
        <div className="nav-desktop-links" style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="link-underline"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--ink-light)',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://portfolio.grandkojo.my"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta-btn"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--cream)',
              background: 'var(--ink)',
              padding: '8px 18px',
              textDecoration: 'none',
              borderRadius: '2px',
              transition: 'background 0.3s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--rust)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--ink)')}
          >
            For technical people.
          </a>
        </div>

        {/* Mobile hamburger — hidden via CSS above 768px */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: 'block',
              width: '24px',
              height: '1.5px',
              background: 'var(--ink)',
              transition: 'transform 0.3s, opacity 0.3s',
              transform: menuOpen
                ? i === 0 ? 'rotate(45deg) translate(4.5px, 4.5px)'
                : i === 1 ? 'scaleX(0)'
                : 'rotate(-45deg) translate(4.5px, -4.5px)'
                : 'none',
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile fullscreen menu */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(245, 240, 232, 0.98)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '28px',
            zIndex: 1100,
          }}
        >
          {/* Close button pinned to same spot as hamburger */}
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              zIndex: 1101,
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="1.5">
              <line x1="4" y1="4" x2="20" y2="20" />
              <line x1="20" y1="4" x2="4" y2="20" />
            </svg>
          </button>

          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2.2rem',
                fontWeight: 600,
                color: 'var(--ink)',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://portfolio.grandkojo.my"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta-btn"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--cream)',
              background: 'var(--ink)',
              padding: '8px 18px',
              textDecoration: 'none',
              borderRadius: '2px',
              transition: 'background 0.3s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--rust)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--ink)')}
          >
            For technical people.
          </a>
        </div>
      )}

      <style>{`
        .nav-hamburger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          flex-direction: column;
          gap: 5px;
          padding: 4px;
          z-index: 1201;
        }
        @media (max-width: 768px) {
          .nav-desktop-links { display: none !important; }
          .nav-hamburger { display: flex !important; }
          .site-nav { padding: 16px 20px !important; }
        }
      `}</style>
    </>
  )
}
