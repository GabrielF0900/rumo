'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export function InitialLoadingScreen() {
  const [state, setState] = useState<'visible' | 'leaving' | 'hidden'>('visible')

  useEffect(() => {
    const leaveTimer = window.setTimeout(() => {
      setState('leaving')
    }, 1900)

    const removeTimer = window.setTimeout(() => {
      setState('hidden')
    }, 2250)

    return () => {
      window.clearTimeout(leaveTimer)
      window.clearTimeout(removeTimer)
    }
  }, [])

  if (state === 'hidden') {
    return null
  }

  return (
    <div
      className="initial-loading-screen"
      data-state={state}
      role="status"
      aria-live="polite"
      aria-label="Carregando a plataforma Rumo"
    >
      <div className="initial-loading-content">
        <Image
          src="/logo-pequena.png"
          alt=""
          width={1280}
          height={1280}
          priority
          className="initial-loading-logo"
        />

        <div className="initial-loading-brand">
          <strong>Rumo</strong>
          <span>Aprenda, avance, conquiste.</span>
        </div>

        <div className="initial-loading-progress" aria-hidden="true">
          <span />
        </div>

        <p>Preparando seu próximo passo...</p>
      </div>
    </div>
  )
}
