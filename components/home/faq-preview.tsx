'use client'

import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import type { FAQItem } from '@/modules/content/domain/faq'

export function FaqPreview({ items }: { items: FAQItem[] }) {
  const [activeId, setActiveId] = useState<string | null>(items[0]?.id ?? null)

  return (
    <section className="home-section home-faq" aria-labelledby="faq-preview-title">
      <div className="home-faq-intro">
        <p className="home-eyebrow">Perguntas frequentes</p>
        <h2 id="faq-preview-title">Respostas diretas para dúvidas importantes.</h2>
        <Link href="/faq" className="home-text-link">
          Ver todas as perguntas
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>

      <div className="home-faq-list">
        {items.map((item) => {
          const answerId = `faq-preview-answer-${item.id}`
          const isOpen = activeId === item.id

          return (
            <div className={`home-faq-item ${isOpen ? 'is-open' : ''}`} key={item.id}>
              <h3>
                <button
                  type="button"
                  onClick={() => setActiveId(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                >
                  <span>{item.question}</span>
                  <ChevronDown size={21} aria-hidden="true" />
                </button>
              </h3>
              {isOpen && <p id={answerId}>{item.answer}</p>}
            </div>
          )
        })}
      </div>
    </section>
  )
}
