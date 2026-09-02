'use client'

import { useEffect, useState } from 'react'
import { Accessibility, Contrast, RotateCcw, Sparkles, Type } from 'lucide-react'

export function AccessibilityPanel() {
  const [open, setOpen] = useState(false)
  const [large, setLarge] = useState(false)
  const [highContrast, setHighContrast] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('a11y-large-text', large)
    root.classList.toggle('a11y-high-contrast', highContrast)
    root.classList.toggle('a11y-reduced-motion', reducedMotion)

    return () => {
      root.classList.remove('a11y-large-text', 'a11y-high-contrast', 'a11y-reduced-motion')
    }
  }, [large, highContrast, reducedMotion])

  function restoreDefaults() {
    setLarge(false)
    setHighContrast(false)
    setReducedMotion(false)
  }

  return (
    <div className="accessibility-wrap">
      <button
        className="accessibility-trigger"
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-controls="accessibility-panel"
      >
        <Accessibility size={17} aria-hidden="true" />
        Acessibilidade
      </button>

      {open && (
        <div id="accessibility-panel" className="accessibility-panel" role="dialog" aria-label="Opções de acessibilidade">
          <strong>Personalize sua leitura</strong>
          <button type="button" onClick={() => setLarge((current) => !current)} aria-pressed={large}>
            <Type size={17} aria-hidden="true" />
            {large ? 'Texto padrão' : 'Aumentar texto'}
          </button>
          <button type="button" onClick={() => setHighContrast((current) => !current)} aria-pressed={highContrast}>
            <Contrast size={17} aria-hidden="true" />
            {highContrast ? 'Contraste padrão' : 'Alto contraste'}
          </button>
          <button type="button" onClick={() => setReducedMotion((current) => !current)} aria-pressed={reducedMotion}>
            <Sparkles size={17} aria-hidden="true" />
            {reducedMotion ? 'Movimento padrão' : 'Reduzir movimento'}
          </button>
          <button type="button" onClick={restoreDefaults}>
            <RotateCcw size={15} aria-hidden="true" />
            Restaurar padrão
          </button>
        </div>
      )}
    </div>
  )
}
