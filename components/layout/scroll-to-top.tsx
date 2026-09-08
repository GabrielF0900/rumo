'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { useAccessibility } from '@/components/accessibility/accessibility-provider'

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const { preferences } = useAccessibility()

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY > 480)
    }

    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })

    return () => window.removeEventListener('scroll', updateVisibility)
  }, [])

  const scrollToTop = () => {
    const reduceMotion = preferences.reducedMotion || window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? 'auto' : 'smooth',
    })
  }

  return (
    <button
      type="button"
      className="scroll-to-top"
      data-visible={isVisible}
      tabIndex={isVisible ? 0 : -1}
      aria-hidden={!isVisible}
      onClick={scrollToTop}
      aria-label="Voltar ao topo da página"
      title="Voltar ao topo"
    >
      <ArrowUp size={21} strokeWidth={2.2} aria-hidden="true" />
    </button>
  )
}
