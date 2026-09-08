'use client'

import Link from 'next/link'
import { useId, useMemo, useState } from 'react'
import { ArrowRight, CircleHelp, Search } from 'lucide-react'

import type { GuideSearchItem } from '@/modules/content/domain/search'
import { searchGuides } from '@/modules/content/services/search-service'

export function SearchPanel({ guides }: { guides: GuideSearchItem[] }) {
  const [query, setQuery] = useState('')
  const hintId = useId()
  const results = useMemo(() => searchGuides(guides, query), [guides, query])

  return (
    <div className="search-panel">
      <div className="search-input-wrap" role="search">
        <Search size={21} aria-hidden="true" />
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Ex.: ENEM, foco, faculdade..."
          aria-label="Buscar guias, categorias e temas"
          aria-describedby={hintId}
        />
      </div>
      <p id={hintId} className="search-hint" role="status" aria-atomic="true">
        {query
          ? `${results.length} resultado${results.length === 1 ? '' : 's'} encontrado${results.length === 1 ? '' : 's'}`
          : 'Encontre um ponto de partida para sua próxima decisão.'}
      </p>
      <div className="search-results">
        {results.map((guide) => (
          <Link href={`/${guide.category}/${guide.slug}`} className="guide-card" key={guide.slug}>
            <div className="guide-top">
              <span className={`pill pill-${guide.categoryAccent}`}>{guide.categoryName}</span>
              <span className="read-time">{guide.readTime} min de leitura</span>
            </div>
            <h2>{guide.title}</h2>
            <p>{guide.summary}</p>
            <span className="text-link">Ler guia <ArrowRight size={15} aria-hidden="true" /></span>
          </Link>
        ))}
        {!results.length && (
          <div className="empty-state">
            <CircleHelp size={25} aria-hidden="true" />
            <div><strong>Nenhum resultado encontrado</strong><p>Tente uma palavra mais ampla, como “estudo”, “curso” ou “futuro”.</p></div>
          </div>
        )}
      </div>
    </div>
  )
}
