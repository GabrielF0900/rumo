import type { Category } from '../domain/category'

export const categories: Category[] = [
  {
    slug: 'estudar',
    name: 'Estudar melhor',
    description:
      'Organização, foco, revisão e técnicas para construir uma rotina de aprendizagem mais possível.',
    icon: 'book',
    accent: 'blue',
  },
  {
    slug: 'pesquisa-ia',
    name: 'Pesquisa & IA',
    description:
      'Aprenda a pesquisar, comparar fontes e usar inteligência artificial de forma responsável.',
    icon: 'search',
    accent: 'violet',
  },
  {
    slug: 'enem',
    name: 'ENEM e pós-ENEM',
    description:
      'Entenda a prova, a nota e os caminhos disponíveis depois do resultado.',
    icon: 'target',
    accent: 'pink',
  },
  {
    slug: 'ensino-superior',
    name: 'Ensino superior',
    description:
      'Conheça cursos, universidades, formas de ingresso, bolsas e oportunidades.',
    icon: 'graduation',
    accent: 'coral',
  },
  {
    slug: 'carreira',
    name: 'Carreira e mercado',
    description:
      'Explore profissões, habilidades, primeiros passos profissionais e caminhos de formação.',
    icon: 'briefcase',
    accent: 'blue',
  },
  {
    slug: 'inclusao',
    name: 'Inclusão e apoio',
    description:
      'Conteúdos sobre acessibilidade, diferentes formas de aprender e onde buscar suporte.',
    icon: 'heart',
    accent: 'violet',
  },
]
