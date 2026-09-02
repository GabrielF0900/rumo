export type Category = { slug: string; name: string; description: string; icon: string; accent: string }
export type Guide = { slug: string; category: string; title: string; summary: string; readTime: string; tags: string[] }

export const categories: Category[] = [
  { slug: 'estudar', name: 'Estudar melhor', description: 'Técnicas para organizar seu tempo, foco e aprendizagem.', icon: 'book', accent: 'blue' },
  { slug: 'pesquisa-ia', name: 'Pesquisa & IA', description: 'Aprenda a pesquisar, checar fontes e usar IA com autonomia.', icon: 'search', accent: 'violet' },
  { slug: 'enem', name: 'ENEM e pós-ENEM', description: 'Estratégias para a prova e caminhos depois do resultado.', icon: 'target', accent: 'pink' },
  { slug: 'ensino-superior', name: 'Ensino superior', description: 'Entenda cursos, bolsas, universidades e suas possibilidades.', icon: 'graduation', accent: 'coral' },
  { slug: 'carreira', name: 'Carreira e mercado', description: 'Explore interesses e dê os primeiros passos profissionais.', icon: 'briefcase', accent: 'blue' },
  { slug: 'inclusao', name: 'Inclusão e apoio', description: 'Informação, acolhimento e recursos para diferentes trajetórias.', icon: 'heart', accent: 'violet' },
]

export const guides: Guide[] = [
  { slug: 'organizacao-de-estudos', category: 'estudar', title: 'Como organizar seus estudos sem se sobrecarregar', summary: 'Um jeito simples de transformar objetivos grandes em próximos passos possíveis.', readTime: '5 min de leitura', tags: ['planejamento', 'foco'] },
  { slug: 'fiz-enem-e-agora', category: 'enem', title: 'Fiz o ENEM. E agora?', summary: 'Veja os principais caminhos para usar sua nota e escolher o próximo passo.', readTime: '6 min de leitura', tags: ['ENEM', 'futuro'] },
  { slug: 'pesquisa-confiavel', category: 'pesquisa-ia', title: 'Como fazer uma pesquisa confiável na internet', summary: 'Critérios práticos para encontrar, comparar e citar boas fontes.', readTime: '4 min de leitura', tags: ['fontes', 'IA'] },
  { slug: 'escolha-de-curso', category: 'ensino-superior', title: 'Como escolher um curso superior', summary: 'Perguntas para conectar interesses, realidade e possibilidades.', readTime: '7 min de leitura', tags: ['escolhas', 'universidade'] },
]

export const faqs = [
  { question: 'Por onde começo a estudar?', answer: 'Comece escolhendo um objetivo pequeno e claro para hoje. Depois, separe o conteúdo em blocos curtos, faça pausas e observe o que funcionou para você.' },
  { question: 'O que posso fazer depois do ENEM?', answer: 'Você pode usar sua nota em processos como Sisu, Prouni e Fies, além de vestibulares próprios. Cada edital tem regras e datas, então confira sempre as fontes oficiais.' },
  { question: 'A Rumo dá respostas prontas?', answer: 'A Rumo organiza informações e oferece caminhos para você tomar decisões com mais segurança. A escolha final é sempre sua e pode contar com pessoas de confiança.' },
  { question: 'Como usar IA nos estudos?', answer: 'Use IA para explicar conceitos, criar perguntas e revisar ideias. Não deixe de conferir as fontes e nunca compartilhe dados pessoais ou trabalhos sem revisar.' },
]

export function getGuide(slug: string) { return guides.find((guide) => guide.slug === slug) }
export function getCategory(slug: string) { return categories.find((category) => category.slug === slug) }
export function getGuidesByCategory(slug: string) { return guides.filter((guide) => guide.category === slug) }

export const iconMap: Record<string, string> = { book: '▱', search: '⌕', target: '◎', graduation: '⌂', briefcase: '▣', heart: '♡' }
