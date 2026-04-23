'use client'

import { useEffect } from 'react'

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value))
}

function setStaticMotionVars(root: HTMLElement) {
  root.style.setProperty('--scroll-y', '0px')
  root.style.setProperty('--scroll-progress', '0')
  root.style.setProperty('--hero-progress', '1')
  root.style.setProperty('--about-progress', '0')
  root.style.setProperty('--services-progress', '0')
  root.style.setProperty('--work-progress', '0')
  root.style.setProperty('--connect-progress', '0')
}

export default function ScrollMotion() {
  useEffect(() => {
    const root = document.documentElement
    const sections = ['about', 'services', 'work', 'connect']
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let ticking = false

    const update = () => {
      ticking = false

      if (prefersReducedMotion.matches) {
        setStaticMotionVars(root)
        return
      }

      const scrollY = window.scrollY
      const pageMax = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1)
      const pageProgress = clamp(scrollY / pageMax, 0, 1)
      const heroHeight = Math.max(window.innerHeight * 0.7, 1)
      const heroProgress = clamp(1 - scrollY / heroHeight, 0, 1)

      root.style.setProperty('--scroll-y', `${scrollY}px`)
      root.style.setProperty('--scroll-progress', pageProgress.toFixed(4))
      root.style.setProperty('--hero-progress', heroProgress.toFixed(4))

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId)
        if (!section) {
          root.style.setProperty(`--${sectionId}-progress`, '0')
          return
        }

        const rect = section.getBoundingClientRect()
        const rawProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height)
        const progress = clamp(rawProgress, 0, 1)
        root.style.setProperty(`--${sectionId}-progress`, progress.toFixed(4))
      })
    }

    const onScrollOrResize = () => {
      if (ticking) {
        return
      }

      ticking = true
      window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize)
    prefersReducedMotion.addEventListener('change', onScrollOrResize)

    return () => {
      window.removeEventListener('scroll', onScrollOrResize)
      window.removeEventListener('resize', onScrollOrResize)
      prefersReducedMotion.removeEventListener('change', onScrollOrResize)
    }
  }, [])

  return null
}
