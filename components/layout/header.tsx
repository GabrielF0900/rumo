'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  ArrowRight,
  Menu,
  Search,
  X,
} from 'lucide-react'
import { useState } from 'react'
import { AccessibilityPanel } from '@/components/accessibility/accessibility-panel'
import { Logo } from './logo'

const navigation = [
  {
    href: '/estudar',
    label: 'Explorar',
  },
  {
    href: '/faq',
    label: 'Perguntas frequentes',
  },
  {
    href: '/sobre',
    label: 'Sobre a Rumo',
  },
]

export function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] =
    useState(false)

  function isActive(href: string) {
    if (href === '/estudar') {
      return (
        pathname === '/estudar' ||
        pathname.startsWith('/estudar/')
      )
    }

    return pathname === href
  }

  return (
    <header className="rumo-header">
      <div className="rumo-header-inner">
        <Logo inverse />

        <nav
          className="rumo-desktop-nav"
          aria-label="Navegação principal"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={
                isActive(item.href)
                  ? 'page'
                  : undefined
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="rumo-header-actions">
          <Link
            href="/busca"
            className="rumo-search-link"
            aria-current={
              pathname === '/busca'
                ? 'page'
                : undefined
            }
          >
            <Search
              size={18}
              aria-hidden="true"
            />

            <span>
              Buscar temas, guias e conteúdos
            </span>
          </Link>

          <AccessibilityPanel />

          <Link
            href="/estudar"
            className="home-button home-button-light"
          >
            Começar agora

            <ArrowRight
              size={16}
              aria-hidden="true"
            />
          </Link>
        </div>

        <button
          className="rumo-menu-button"
          type="button"
          onClick={() =>
            setMenuOpen((current) => !current)
          }
          aria-expanded={menuOpen}
          aria-controls="rumo-mobile-navigation"
          aria-label={
            menuOpen
              ? 'Fechar menu'
              : 'Abrir menu'
          }
        >
          {menuOpen ? (
            <X aria-hidden="true" />
          ) : (
            <Menu aria-hidden="true" />
          )}
        </button>
      </div>

      {menuOpen && (
        <nav
          id="rumo-mobile-navigation"
          className="rumo-mobile-nav"
          aria-label="Menu móvel"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() =>
                setMenuOpen(false)
              }
              aria-current={
                isActive(item.href)
                  ? 'page'
                  : undefined
              }
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/busca"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Buscar um tema
          </Link>

          <AccessibilityPanel />

          <Link
            href="/estudar"
            className="home-button home-button-light"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Começar agora
          </Link>
        </nav>
      )}
    </header>
  )
}