type BrandProps = {
  compact?: boolean
  decorative?: boolean
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

export function RumoIcon({
  decorative = false,
  className = '',
}: BrandProps) {
  const accessibilityProps = decorative
    ? ({ 'aria-hidden': true } as const)
    : ({
        role: 'img',
        'aria-label': 'Símbolo da Rumo: livro, caminho e progresso',
      } as const)

  return (
    <svg
      viewBox="0 0 96 96"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...accessibilityProps}
    >
      <defs>
        <linearGradient
          id="rumo-icon-gradient"
          x1="18"
          y1="80"
          x2="81"
          y2="15"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1A2D7A" />
          <stop offset="0.45" stopColor="#7B3AED" />
          <stop offset="0.78" stopColor="#E23D8D" />
          <stop offset="1" stopColor="#FFB08A" />
        </linearGradient>
      </defs>

      {/* livro */}
      <path
        d="M12 61C25 57 36 59 48 68V85C36 77 24 74 12 77V61Z"
        fill="white"
        stroke="currentColor"
        strokeWidth="3.8"
        strokeLinejoin="round"
      />

      <path
        d="M84 61C71 57 60 59 48 68V85C60 77 72 74 84 77V61Z"
        fill="white"
        stroke="currentColor"
        strokeWidth="3.8"
        strokeLinejoin="round"
      />

      <path
        d="M48 68V85"
        stroke="#7B3AED"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* caminho */}
      <path
        d="M48 68C46 54 51 45 61 38C70 32 74 25 75 17"
        stroke="url(#rumo-icon-gradient)"
        strokeWidth="8"
        strokeLinecap="round"
      />

      {/* seta */}
      <path
        d="M66 20L76 12L82 24"
        stroke="#E23D8D"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* capelo */}
      <path
        d="M39 30L55 24L71 30L55 36L39 30Z"
        fill="#1A2D7A"
      />

      <path
        d="M45 34V41C50 45 60 45 65 41V34"
        fill="#7B3AED"
      />

      <path
        d="M71 30V40"
        stroke="#E23D8D"
        strokeWidth="2.8"
        strokeLinecap="round"
      />

      <circle cx="71" cy="43" r="3" fill="#FFB08A" />
    </svg>
  )
}

export function RumoBrandArt({
  decorative = false,
  className = '',
}: BrandProps) {
  const accessibilityProps = decorative
    ? ({ 'aria-hidden': true } as const)
    : ({
        role: 'img',
        'aria-label':
          'Rumo: livro aberto, caminho ascendente e formação acadêmica',
      } as const)

  return (
    <svg
      viewBox="0 0 760 470"
      className={[
        'rumo-brand-art',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...accessibilityProps}
    >
      <defs>
        <linearGradient
          id="rumo-road-gradient"
          x1="330"
          y1="392"
          x2="612"
          y2="95"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1A2D7A" />
          <stop offset="0.28" stopColor="#2563EB" />
          <stop offset="0.56" stopColor="#7B3AED" />
          <stop offset="0.82" stopColor="#E23D8D" />
          <stop offset="1" stopColor="#FFB08A" />
        </linearGradient>

        <linearGradient
          id="rumo-text-gradient"
          x1="50"
          y1="250"
          x2="300"
          y2="250"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#143293" />
          <stop offset="0.5" stopColor="#6B36CB" />
          <stop offset="1" stopColor="#E23D8D" />
        </linearGradient>

        <linearGradient
          id="rumo-book-gradient"
          x1="350"
          y1="285"
          x2="655"
          y2="410"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#F0F1FF" />
        </linearGradient>

        <filter
          id="rumo-shadow"
          x="0"
          y="0"
          width="760"
          height="470"
          filterUnits="userSpaceOnUse"
        >
          <feDropShadow
            dx="0"
            dy="20"
            stdDeviation="20"
            floodColor="#1A2D7A"
            floodOpacity="0.12"
          />
        </filter>
      </defs>

      {/* cenário */}
      <path
        d="M20 376C166 311 317 325 464 370C585 408 669 411 760 382V470H20V376Z"
        fill="#F0ECFF"
      />
      <path
        d="M88 417C238 355 385 357 535 403C618 428 688 432 760 414"
        stroke="#E2DAFF"
        strokeWidth="46"
        strokeLinecap="round"
      />

      {/* Rumo */}
      <text x="25" y="275" fill="url(#rumo-text-gradient)" fontSize="126" fontWeight="800" fontFamily="Arial, sans-serif" letterSpacing="-8">
        Rumo
      </text>

      {/* sparkles */}
      <path
        d="M320 127L326 141L340 147L326 153L320 167L314 153L300 147L314 141L320 127Z"
        fill="#2563EB"
      />
      <path d="M676 93L681 105L693 110L681 115L676 127L671 115L659 110L671 105L676 93Z" fill="#E23D8D" />
      <circle cx="610" cy="115" r="8" fill="#FFB08A" />

      {/* livro */}
      <g filter="url(#rumo-shadow)">
        <path
          d="M350 315C403 297 458 307 512 344V418C457 386 402 377 350 389V315Z"
          fill="url(#rumo-book-gradient)"
          stroke="#1A2D7A"
          strokeWidth="6"
          strokeLinejoin="round"
        />

        <path
          d="M674 315C621 297 566 307 512 344V418C567 386 622 377 674 389V315Z"
          fill="url(#rumo-book-gradient)"
          stroke="#1A2D7A"
          strokeWidth="6"
          strokeLinejoin="round"
        />

        <path
          d="M512 344V418"
          stroke="#7B3AED"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </g>

      {/* estrada */}
      <path
        d="M512 344C500 288 516 250 549 217C589 179 615 143 625 96"
        stroke="url(#rumo-road-gradient)"
        strokeWidth="29"
        strokeLinecap="round"
      />

      {/* seta */}
      <path
        d="M589 119L632 78L653 126"
        stroke="#E23D8D"
        strokeWidth="19"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* capelo */}
      <path
        d="M475 192L551 163L628 192L551 222L475 192Z"
        fill="#1A2D7A"
      />

      <path
        d="M505 208V242C529 262 574 262 598 242V208"
        fill="#7B3AED"
      />

      <path
        d="M628 192V238"
        stroke="#E23D8D"
        strokeWidth="7"
        strokeLinecap="round"
      />

      <circle
        cx="628"
        cy="247"
        r="9"
        fill="#FFB08A"
      />
    </svg>
  )
}
