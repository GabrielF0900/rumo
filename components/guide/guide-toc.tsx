'use client'

import { useId, useState } from 'react'
import { ChevronDown, ListTree } from 'lucide-react'

import type { GuideSection } from '@/modules/content/domain/guide'

export function GuideToc({ sections }: { sections: GuideSection[] }) {
  const [isOpen, setIsOpen] = useState(true)
  const contentId = useId()

  return (
    <nav className={`guide-toc ${isOpen ? 'is-open' : ''}`} aria-label="Neste guia">
      <button
        type="button"
        className="guide-toc-trigger"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className="guide-toc-trigger-copy">
          <span className="guide-toc-trigger-icon" aria-hidden="true">
            <ListTree size={18} />
          </span>
          <span>
            <strong>Neste guia</strong>
            <small>{sections.length} tópicos</small>
          </span>
        </span>
        <ChevronDown className="guide-toc-chevron" size={19} aria-hidden="true" />
      </button>

      <div id={contentId} className="guide-toc-collapsible">
        <div className="guide-toc-panel">
          <ol>
            {sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>{section.title}</a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </nav>
  )
}
