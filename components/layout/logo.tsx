import Link from 'next/link'
import {
  RumoIcon,
  RumoWordmark,
} from '@/components/brand/rumo-brand'

type LogoProps = {
  compact?: boolean
  inverse?: boolean
}

export function Logo({
  compact = false,
  inverse = false,
}: LogoProps) {
  return (
    <Link
      href="/"
      className={[
        'rumo-logo',
        inverse ? 'is-inverse' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      aria-label="Rumo, página inicial"
    >
      <span
        className="rumo-logo-symbol"
        aria-hidden="true"
      >
        <RumoIcon decorative />
      </span>

      <RumoWordmark compact={compact} />
    </Link>
  )
}