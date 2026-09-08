'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

type Preferences = { large: boolean; highContrast: boolean; reducedMotion: boolean }
const defaults: Preferences = { large: false, highContrast: false, reducedMotion: false }
const AccessibilityContext = createContext<{
  preferences: Preferences
  toggle: (key: keyof Preferences) => void
  reset: () => void
} | null>(null)

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [preferences, setPreferences] = useState(defaults)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('a11y-large-text', preferences.large)
    root.classList.toggle('a11y-high-contrast', preferences.highContrast)
    root.classList.toggle('a11y-reduced-motion', preferences.reducedMotion)
    return () => root.classList.remove('a11y-large-text', 'a11y-high-contrast', 'a11y-reduced-motion')
  }, [preferences])

  return (
    <AccessibilityContext.Provider value={{
      preferences,
      toggle: (key) => setPreferences((current) => ({ ...current, [key]: !current[key] })),
      reset: () => setPreferences(defaults),
    }}>
      {children}
    </AccessibilityContext.Provider>
  )
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext)
  if (!context) throw new Error('AccessibilityProvider is required')
  return context
}
