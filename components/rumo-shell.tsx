'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { ArrowRight, BookOpen, BriefcaseBusiness, ChevronDown, CircleHelp, Compass, ExternalLink, Heart, Menu, Search, Target, X } from 'lucide-react'
import { categories, faqs, guides, type Category } from '@/data/content'
import { AccessibilityPanel } from '@/components/accessibility/accessibility-panel'

const icons = { book: BookOpen, search: Search, target: Target, graduation: Compass, briefcase: BriefcaseBusiness, heart: Heart }

export function Logo({ compact = false }: { compact?: boolean }) {
  return <Link href="/" className="flex items-center gap-3" aria-label="Rumo, página inicial"><span className="logo-mark" aria-hidden="true"><BookOpen size={compact ? 19 : 22} /><span className="logo-arrow">↗</span></span><span className={compact ? 'text-lg font-bold tracking-tight' : 'text-xl font-bold tracking-tight'}>Rumo</span></Link>
}

export { AccessibilityPanel }

export function Header() {
  const [open, setOpen] = useState(false)
  return <header className="site-header"><div className="header-inner"><Logo /><nav className="hidden items-center gap-6 lg:flex" aria-label="Navegação principal"><Link href="/estudar" aria-current="page">Explorar</Link><Link href="/faq">Perguntas frequentes</Link><Link href="/sobre">Sobre a Rumo</Link></nav><div className="ml-auto hidden items-center gap-4 md:flex"><Link href="/busca" className="header-search"><Search size={18} /> Buscar</Link><AccessibilityPanel /><Link href="/estudar" className="button button-light">Começar agora <ArrowRight size={16} /></Link></div><button className="mobile-menu-button md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Fechar menu' : 'Abrir menu'}>{open ? <X /> : <Menu />}</button></div>{open && <nav id="mobile-navigation" className="mobile-nav md:hidden" aria-label="Menu móvel"><Link href="/estudar" onClick={() => setOpen(false)}>Explorar categorias</Link><Link href="/busca" onClick={() => setOpen(false)}>Buscar um tema</Link><Link href="/faq" onClick={() => setOpen(false)}>Perguntas frequentes</Link><Link href="/sobre" onClick={() => setOpen(false)}>Sobre a Rumo</Link><AccessibilityPanel /></nav>}</header>
}

export function Footer() { return <footer className="footer"><div className="footer-inner"><div><Logo compact /><p className="footer-copy">Aprenda, avance, conquiste.<br />Informação para escolher caminhos com mais clareza.</p></div><div className="footer-links"><div><strong>Explorar</strong><Link href="/estudar">Estudar melhor</Link><Link href="/enem">ENEM</Link><Link href="/carreira">Carreira</Link></div><div><strong>Rumo</strong><Link href="/sobre">Sobre nós</Link><Link href="/faq">FAQ</Link><a href="https://www.gov.br/mec/pt-br" target="_blank" rel="noreferrer">Fontes oficiais <ExternalLink size={12} /></a></div></div></div><p className="footer-disclaimer">A Rumo oferece conteúdo informativo e não substitui orientação pedagógica, profissional ou atendimento especializado.</p><div className="footer-bottom">© 2026 Rumo · Aprenda, avance, conquiste.</div></footer> }

export function CategoryCard({ category }: { category: Category }) { const Icon = icons[category.icon as keyof typeof icons] || Compass; return <Link href={`/${category.slug}`} className={`category-card accent-${category.accent}`}><span className="icon-bubble"><Icon size={23} /></span><span><strong>{category.name}</strong><small>{category.description}</small></span><ArrowRight className="card-arrow" size={20} /></Link> }

export function GuideCard({ guide }: { guide: (typeof guides)[number] }) { const category = categories.find((item) => item.slug === guide.category); return <Link href={`/${guide.category}/${guide.slug}`} className="guide-card"><div className="guide-top"><span className={`pill pill-${category?.accent}`}>{category?.name}</span><span className="read-time">{guide.readTime}</span></div><h3>{guide.title}</h3><p>{guide.summary}</p><span className="text-link">Ler guia <ArrowRight size={15} /></span></Link> }

export function FAQ({ items = faqs }: { items?: typeof faqs }) { const [active, setActive] = useState<number | null>(0); return <div className="faq-list">{items.map((item, index) => { const id = `faq-answer-${index}`; return <div className={`faq-item ${active === index ? 'is-open' : ''}`} key={item.question}><button onClick={() => setActive(active === index ? null : index)} aria-expanded={active === index} aria-controls={id}><span>{item.question}</span><ChevronDown size={21} aria-hidden="true" /></button>{active === index && <p id={id}>{item.answer}</p>}</div> })}</div> }

export function SearchPanel() { const [query, setQuery] = useState(''); const results = useMemo(() => { const term = query.toLowerCase().trim(); if (!term) return guides; return guides.filter((guide) => { const category = categories.find((item) => item.slug === guide.category); return `${guide.title} ${guide.summary} ${guide.tags.join(' ')} ${category?.name}`.toLowerCase().includes(term) }) }, [query]); return <div className="search-panel"><div className="search-input-wrap"><Search size={21} /><input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Ex.: ENEM, foco, faculdade..." aria-label="Buscar guias, categorias e temas" /></div><p className="search-hint">{query ? `${results.length} resultado${results.length === 1 ? '' : 's'} encontrado${results.length === 1 ? '' : 's'}` : 'Encontre um ponto de partida para sua próxima decisão.'}</p><div className="search-results">{results.map((guide) => <GuideCard guide={guide} key={guide.slug} />)}{!results.length && <div className="empty-state"><CircleHelp size={25} /><div><strong>Nenhum resultado encontrado</strong><p>Tente uma palavra mais ampla, como “estudo”, “curso” ou “futuro”.</p></div></div>}</div></div> }

export function InnerLayout({ children }: { children: React.ReactNode }) { return <><Header /><main>{children}</main><Footer /></> }

export { categories, guides }
