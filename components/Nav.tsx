'use client'
import { useState, useEffect } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Connect', href: '#connect' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const media = window.matchMedia('(max-width: 768px)')
    const onChange = () => setIsMobile(media.matches)
    onChange()
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (!isMobile) setMenuOpen(false)
  }, [isMobile])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: isMobile
          ? (scrolled ? '14px 20px' : '20px 20px')
          : (scrolled ? '14px 40px' : '28px 40px'),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        background: scrolled ? 'rgba(245, 240, 232, 0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(212, 201, 168, 0.5)' : 'none',
      }}
    >
      {/* Logo */}
      <a
        href="#"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.2rem',
          fontWeight: 600,
          color: 'var(--ink)',
          textDecoration: 'none',
          letterSpacing: '0.02em',
        }}
      >
        grandkojo
        <span style={{ color: 'var(--rust)', marginLeft: '2px' }}>.</span>
      </a>

      {/* Desktop links */}
      {!isMobile && (
        <div
          style={{
            display: 'flex',
            gap: '40px',
            alignItems: 'center',
          }}
        >
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
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://portfolio.grandkojo.my"
            target="_blank"
            rel="noopener noreferrer"
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
            Case studies →
          </a>
        </div>
      )}

      {/* Mobile hamburger */}
      {isMobile && (
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            padding: '4px',
            zIndex: 1201,
          }}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: 'block',
              width: '24px',
              height: '1.5px',
              background: 'var(--ink)',
              transition: 'all 0.3s',
              transform: menuOpen
                ? i === 0 ? 'rotate(45deg) translate(4px, 4px)'
                : i === 1 ? 'scaleX(0)'
                : 'rotate(-45deg) translate(4px, -4px)'
                : 'none',
            }} />
          ))}
        </button>
      )}

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(245, 240, 232, 0.98)',
          backdropFilter: 'blur(6px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '28px',
          zIndex: 1200,
        }}>
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
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              color: 'var(--rust)',
              textDecoration: 'none',
            }}
          >
            portfolio.grandkojo.my →
          </a>
        </div>
      )}
    </nav>
  )
}
