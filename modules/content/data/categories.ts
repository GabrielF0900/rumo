import type { Category } from '../domain/category'

export const categories: Category[] = [
  {
    slug: 'estudar',
    name: 'Estudar melhor',
    description:
      'Organização, foco, revisão e técnicas para construir uma rotina de aprendizagem mais possível.',
    heroTitle:
      'Organização, foco, revisão e técnicas para aprender mais.',
    heroHighlight: 'aprender mais.',
    heroDescription:
      'Aprenda a planejar seus estudos, escolher estratégias de aprendizagem e revisar com mais clareza, respeitando sua rotina e seus limites.',
    icon: 'book',
    accent: 'blue',
    trustLabels: ['Conteúdo gratuito', 'Baseado em evidências'],
    featuredGuideSlugs: [
      'como-organizar-seus-estudos-sem-se-sobrecarregar',
      'tecnicas-de-estudo-que-realmente-funcionam',
      'como-revisar-e-fixar-o-conteudo-de-forma-eficiente',
    ],
    learningPaths: [
      { id: 'foco', title: 'Foco e concentração', description: 'Estratégias para organizar o ambiente, reduzir distrações e sustentar a atenção.', icon: 'brain' },
      { id: 'planejamento', title: 'Metas e planejamento', description: 'Transforme objetivos grandes em prioridades e próximos passos possíveis.', icon: 'target' },
      { id: 'tempo', title: 'Gestão do tempo', description: 'Distribua estudos, tarefas e pausas de forma compatível com sua rotina.', icon: 'clock' },
      { id: 'anotacoes', title: 'Resumos e registros', description: 'Organize informações usando anotações, resumos e outros recursos de revisão.', icon: 'file' },
      { id: 'provas', title: 'Provas e simulados', description: 'Prepare-se utilizando questões, análise de erros, prática e revisão.', icon: 'check' },
      { id: 'habitos', title: 'Motivação e hábitos', description: 'Construa hábitos possíveis sem depender de motivação constante.', icon: 'star' },
    ],
  },
  {
    slug: 'pesquisa-ia',
    name: 'Pesquisa & IA',
    description:
      'Aprenda a pesquisar, comparar fontes e usar inteligência artificial de forma responsável.',
    heroTitle:
      'Pesquise melhor, verifique informações e use IA com mais autonomia.',
    heroHighlight: 'mais autonomia.',
    heroDescription:
      'Aprenda a formular boas perguntas, comparar fontes, reconhecer informações confiáveis e utilizar inteligência artificial como ferramenta de apoio.',
    icon: 'search',
    accent: 'violet',
    trustLabels: ['Pesquisa responsável', 'Verificação de fontes'],
    featuredGuideSlugs: ['pesquisa-inteligente-com-ia-por-onde-comecar'],
    learningPaths: [
      { id: 'pesquisa', title: 'Pesquisa na internet', description: 'Aprenda a buscar informações usando perguntas e palavras-chave mais claras.', icon: 'search' },
      { id: 'fontes', title: 'Fontes confiáveis', description: 'Observe autoria, instituição, evidências, data e contexto das informações.', icon: 'shield' },
      { id: 'ia', title: 'Inteligência artificial', description: 'Use IA para estudar e organizar ideias sem tratá-la como autoridade final.', icon: 'sparkles' },
      { id: 'verificacao', title: 'Verificação', description: 'Compare fontes e investigue afirmações antes de aceitá-las.', icon: 'check' },
      { id: 'citacao', title: 'Referências e citações', description: 'Registre de onde vieram as informações utilizadas em suas pesquisas.', icon: 'file' },
      { id: 'privacidade', title: 'Privacidade digital', description: 'Saiba quais informações pessoais devem permanecer protegidas.', icon: 'shield' },
    ],
  },
  {
    slug: 'enem',
    name: 'ENEM e pós-ENEM',
    description:
      'Entenda a prova, a nota e os caminhos disponíveis depois do resultado.',
    heroTitle:
      'Entenda o ENEM e transforme o resultado em próximos passos.',
    heroHighlight: 'próximos passos.',
    heroDescription:
      'Informações para conhecer a prova, organizar a preparação e pesquisar caminhos acadêmicos depois do resultado.',
    icon: 'target',
    accent: 'pink',
    trustLabels: ['Fontes oficiais', 'Informações atualizadas'],
    featuredGuideSlugs: ['fiz-o-enem-e-agora'],
    learningPaths: [
      { id: 'preparacao', title: 'Preparação', description: 'Organize estudos, conteúdos, simulados e revisões para a prova.', icon: 'book' },
      { id: 'prova', title: 'A prova', description: 'Entenda a estrutura do exame e como pesquisar informações oficiais.', icon: 'file' },
      { id: 'resultado', title: 'Resultado', description: 'Saiba como consultar e interpretar suas notas com cuidado.', icon: 'target' },
      { id: 'sisu', title: 'Sisu', description: 'Conheça o processo e acompanhe regras diretamente nos canais oficiais.', icon: 'graduation' },
      { id: 'bolsas', title: 'Prouni e bolsas', description: 'Pesquise bolsas, requisitos e oportunidades em fontes oficiais.', icon: 'star' },
      { id: 'financiamento', title: 'Fies e alternativas', description: 'Conheça opções de financiamento e outras formas de ingresso.', icon: 'building' },
    ],
  },
  {
    slug: 'ensino-superior',
    name: 'Ensino superior',
    description:
      'Conheça cursos, universidades, formas de ingresso, bolsas e oportunidades.',
    heroTitle:
      'Escolha caminhos acadêmicos com mais informação e menos pressão.',
    heroHighlight: 'menos pressão.',
    heroDescription:
      'Pesquise cursos, instituições, modalidades, formas de ingresso, custos e possibilidades antes de tomar decisões.',
    icon: 'graduation',
    accent: 'coral',
    trustLabels: ['Decisões informadas', 'Fontes institucionais'],
    featuredGuideSlugs: ['como-escolher-um-curso-superior'],
    learningPaths: [
      { id: 'curso', title: 'Escolha de curso', description: 'Compare interesses, conteúdos estudados e possibilidades profissionais.', icon: 'graduation' },
      { id: 'instituicoes', title: 'Instituições', description: 'Pesquise universidades, faculdades e centros universitários.', icon: 'building' },
      { id: 'modalidades', title: 'Modalidades', description: 'Entenda diferenças entre presencial, híbrido e educação a distância.', icon: 'book' },
      { id: 'ingresso', title: 'Formas de ingresso', description: 'Conheça ENEM, vestibulares e outros processos de seleção.', icon: 'target' },
      { id: 'bolsas', title: 'Bolsas e apoios', description: 'Pesquise oportunidades de bolsas e políticas de apoio estudantil.', icon: 'star' },
      { id: 'rotina', title: 'Vida universitária', description: 'Entenda rotina, organização, responsabilidades e adaptação acadêmica.', icon: 'users' },
    ],
  },
  {
    slug: 'carreira',
    name: 'Carreira e mercado',
    description:
      'Explore profissões, habilidades, primeiros passos profissionais e caminhos de formação.',
    heroTitle:
      'Construa seus primeiros passos profissionais com mais clareza.',
    heroHighlight: 'mais clareza.',
    heroDescription:
      'Explore profissões, currículo, estágio, portfólio, entrevistas, habilidades e formas de começar a construir experiência.',
    icon: 'briefcase',
    accent: 'blue',
    trustLabels: ['Orientação prática', 'Autonomia profissional'],
    featuredGuideSlugs: [],
    learningPaths: [
      { id: 'curriculo', title: 'Primeiro currículo', description: 'Aprenda o que colocar no currículo mesmo sem experiência profissional.', icon: 'file' },
      { id: 'profissoes', title: 'Explorar profissões', description: 'Pesquise atividades, áreas de atuação e diferentes caminhos profissionais.', icon: 'search' },
      { id: 'estagio', title: 'Estágio e oportunidades', description: 'Entenda como procurar e avaliar oportunidades de entrada no mercado.', icon: 'briefcase' },
      { id: 'habilidades', title: 'Habilidades', description: 'Reconheça competências técnicas e comportamentais que podem ser desenvolvidas.', icon: 'star' },
      { id: 'portfolio', title: 'Projetos e portfólio', description: 'Organize projetos e experiências que demonstrem o que você sabe fazer.', icon: 'file' },
      { id: 'entrevista', title: 'Entrevistas', description: 'Prepare-se para explicar experiências, interesses e projetos.', icon: 'users' },
    ],
  },
  {
    slug: 'inclusao',
    name: 'Inclusão e apoio',
    description:
      'Conteúdos sobre acessibilidade, diferentes formas de aprender e onde buscar suporte.',
    heroTitle:
      'Aprender também significa encontrar caminhos que respeitem diferenças.',
    heroHighlight: 'respeitem diferenças.',
    heroDescription:
      'Informações sobre acessibilidade, barreiras de aprendizagem, recursos de apoio e diferentes maneiras de organizar a experiência educacional.',
    icon: 'heart',
    accent: 'violet',
    trustLabels: ['Respeito e inclusão', 'Acessibilidade'],
    featuredGuideSlugs: [],
    learningPaths: [
      { id: 'acessibilidade', title: 'Acessibilidade', description: 'Conheça recursos e princípios que ajudam a reduzir barreiras.', icon: 'accessibility' },
      { id: 'aprendizagem', title: 'Formas de aprender', description: 'Explore estratégias adaptáveis sem rotular pessoas em estilos fixos.', icon: 'brain' },
      { id: 'apoio-escolar', title: 'Apoio escolar', description: 'Entenda onde e como buscar orientação dentro da comunidade escolar.', icon: 'users' },
      { id: 'organizacao', title: 'Organização adaptável', description: 'Encontre maneiras mais previsíveis e flexíveis de organizar informações.', icon: 'file' },
      { id: 'tecnologia', title: 'Tecnologia assistiva', description: 'Conheça recursos digitais que podem apoiar acesso e autonomia.', icon: 'accessibility' },
      { id: 'convivencia', title: 'Respeito às diferenças', description: 'Promova relações mais respeitosas sem invadir limites individuais.', icon: 'heart' },
    ],
  },
]
