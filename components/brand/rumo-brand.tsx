type BrandProps = {
  compact?: boolean
  className?: string
}

export function RumoWordmark({
  compact = false,
  className = '',
}: BrandProps) {
  return (
    <span
      className={[
        'rumo-wordmark',
        compact ? 'is-compact' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      Rumo
    </span>
  )
}
