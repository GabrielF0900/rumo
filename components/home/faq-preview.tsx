'use client'

import Link from 'next/link'
import { ArrowRight, ChevronDown, CircleHelp } from 'lucide-react'
import { useState } from 'react'

import type { FAQItem } from '@/modules/content/domain/faq'

export function FaqPreview({ items }: { items: FAQItem[] }) {
  const [activeId, setActiveId] = useState<string | null>(null)

  return (
    <section className="home-faq" aria-labelledby="faq-preview-title">
      <div className="home-faq-heading">
        <div className="home-faq-title">
          <CircleHelp size={21} strokeWidth={2} aria-hidden="true" />
          <h2 id="faq-preview-title">Perguntas frequentes</h2>
        </div>

        <Link href="/faq" className="home-faq-all-link">
          Ver todas as perguntas
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>

      <div className="home-faq-list">
        {items.map((item) => {
          const isOpen = activeId === item.id
          const answerId = `faq-preview-answer-${item.id}`

          return (
            <article key={item.id} className={['home-faq-item', isOpen ? 'is-open' : ''].filter(Boolean).join(' ')}>
              <h3>
                <button
                  type="button"
                  onClick={() => setActiveId(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                >
                  <span>{item.question}</span>
                  <ChevronDown size={18} aria-hidden="true" />
                </button>
              </h3>

              {isOpen && <p id={answerId}>{item.answer}</p>}
            </article>
          )
        })}
      </div>
    </section>
  )
}
