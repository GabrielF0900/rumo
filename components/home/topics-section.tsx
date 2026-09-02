import { CategoryCard } from '@/components/cards/category-card'
import type { Category } from '@/modules/content/domain/category'

export function TopicsSection({ categories }: { categories: Category[] }) {
  return (
    <section id="categorias" className="home-section home-topics" aria-labelledby="topics-title">
      <div className="home-section-heading">
        <div>
          <p className="home-eyebrow">Explore por temas</p>
          <h2 id="topics-title">Um lugar para cada próximo passo.</h2>
        </div>
        <p>Escolha o tema que mais combina com o que você está vivendo agora.</p>
      </div>
      <div className="home-topics-grid">
        {categories.map((category) => (
          <CategoryCard key={category.slug} category={category} />
        ))}
      </div>
    </section>
  )
}
