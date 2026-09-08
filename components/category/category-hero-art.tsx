import Image from 'next/image'

import type { Category } from '@/modules/content/domain/category'

const categoryImages: Record<string, string> = {
  estudar: '/images/categories/estudar-hero.png',
}

export function CategoryHeroArt({
  category,
}: {
  category: Category
}) {
  const imageSrc = categoryImages[category.slug]

  if (!imageSrc) {
    return (
      <div
        className={`category-hero-art category-hero-art-fallback accent-${category.accent}`}
        aria-hidden="true"
      >
        <span className="category-art-fallback-mark">
          {category.name.slice(0, 1)}
        </span>
      </div>
    )
  }

  return (
    <div className="category-hero-art">
      <Image
        src={imageSrc}
        alt=""
        width={1448}
        height={1086}
        sizes="(max-width: 800px) 92vw, 650px"
        priority={category.slug === 'estudar'}
        className="category-hero-image"
      />
    </div>
  )
}
