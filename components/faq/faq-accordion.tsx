'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

import type { FAQItem } from '@/modules/content/domain/faq'

type FAQAccordionProps = {
  items: FAQItem[]
  allowMultiple?: boolean
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [activeId, setActiveId] = useState<string | null>(null)

  return (
    <div className="faq-accordion">
      {items.map((item) => {
        const isOpen = activeId === item.id
        const answerId = `faq-answer-${item.id}`
        const buttonId = `faq-button-${item.id}`

        return (
          <article key={item.id} className={['faq-accordion-item', isOpen ? 'is-open' : ''].filter(Boolean).join(' ')}>
            <h2>
              <button
                id={buttonId}
                type="button"
                onClick={() => setActiveId(isOpen ? null : item.id)}
                aria-expanded={isOpen}
                aria-controls={answerId}
              >
                <span>{item.question}</span>
                <ChevronDown size={20} aria-hidden="true" />
              </button>
            </h2>

            {isOpen && (
              <div id={answerId} role="region" aria-labelledby={buttonId} className="faq-accordion-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </article>
        )
      })}
    </div>
  )
}
