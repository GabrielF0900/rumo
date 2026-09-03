'use client'

import { useEffect, useState } from 'react'

export function RumoLoading() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!visible) {
    return null
  }

  return (
    <div
      className="app-loading"
      role="status"
      aria-live="polite"
      aria-label="Carregando conteúdo"
    >
      <div className="app-loading-content">
        <div
          className="app-loading-logo"
          aria-hidden="true"
        >
          R
        </div>

        <div
          className="app-loading-track"
          aria-hidden="true"
        >
          <span />
        </div>

        <p>
          Preparando seu próximo passo...
        </p>
      </div>
    </div>
  )
}
