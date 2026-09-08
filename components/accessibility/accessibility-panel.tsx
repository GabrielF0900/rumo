'use client'

import { useEffect, useId, useRef, useState } from 'react'
import { Accessibility, Contrast, RotateCcw, Sparkles, Type } from 'lucide-react'
import { useAccessibility } from './accessibility-provider'

export function AccessibilityPanel() {
  const [open, setOpen] = useState(false)
  const { preferences: { large, highContrast, reducedMotion }, toggle, reset } = useAccessibility()
  const panelId = useId()
  const triggerRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open) panelRef.current?.querySelector('button')?.focus()
  }, [open])

  useEffect(() => {
    if (!open) return
    const breakpoint = window.matchMedia('(max-width: 900px)')
    const closeOnLayoutChange = () => {
      const ownedFocus = panelRef.current?.contains(document.activeElement)
      setOpen(false)
      if (ownedFocus) {
        const triggers = document.querySelectorAll<HTMLButtonElement>('.accessibility-trigger, .rumo-menu-button')
        Array.from(triggers).find((trigger) => trigger.getClientRects().length > 0)?.focus()
      }
    }
    breakpoint.addEventListener('change', closeOnLayoutChange)
    return () => breakpoint.removeEventListener('change', closeOnLayoutChange)
  }, [open])

  return (
    <div className="accessibility-wrap"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false)
      }}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && open) {
          event.stopPropagation()
          setOpen(false)
          triggerRef.current?.focus()
        }
      }}
    >
      <button
        ref={triggerRef}
        className="accessibility-trigger"
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-haspopup="dialog"
      >
        <Accessibility size={17} aria-hidden="true" />
        Acessibilidade
      </button>

      {open && (
        <div id={panelId} ref={panelRef} className="accessibility-panel" role="dialog" aria-label="Opções de acessibilidade">
          <strong>Personalize sua leitura</strong>
          <button type="button" onClick={() => toggle('large')} aria-pressed={large}>
            <Type size={17} aria-hidden="true" />
            {large ? 'Texto padrão' : 'Aumentar texto'}
          </button>
          <button type="button" onClick={() => toggle('highContrast')} aria-pressed={highContrast}>
            <Contrast size={17} aria-hidden="true" />
            {highContrast ? 'Contraste padrão' : 'Alto contraste'}
          </button>
          <button type="button" onClick={() => toggle('reducedMotion')} aria-pressed={reducedMotion}>
            <Sparkles size={17} aria-hidden="true" />
            {reducedMotion ? 'Movimento padrão' : 'Reduzir movimento'}
          </button>
          <button type="button" onClick={reset}>
            <RotateCcw size={15} aria-hidden="true" />
            Restaurar padrão
          </button>
          <button type="button" onClick={() => { setOpen(false); triggerRef.current?.focus() }}>
            Fechar opções
          </button>
        </div>
      )}
    </div>
  )
}
