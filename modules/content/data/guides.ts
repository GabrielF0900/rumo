import type { Guide } from '../domain/guide'

export const guides: Guide[] = [
  {
    slug: 'organizacao-de-estudos',
    category: 'estudar',
    title: 'Como organizar seus estudos sem se sobrecarregar',
    summary: 'Um guia para transformar objetivos grandes em passos menores e possíveis.',
    description:
      'Organização não significa estudar o tempo todo. Significa definir prioridades, construir uma rotina possível e aprender a respeitar seus limites.',
    readTime: 8,
    tags: ['planejamento', 'foco', 'rotina', 'revisão'],
    sections: [
      {
        id: 'comece-pelo-possivel',
        title: 'Comece pelo que é possível hoje',
        paragraphs: [
          'Objetivos muito genéricos podem deixar difícil entender por onde começar e aumentar a sensação de sobrecarga. Transformar uma intenção ampla em uma ação observável reduz a ambiguidade e facilita o primeiro passo.',
        ],
        examples: ['“Estudar matemática” pode se tornar “resolver cinco exercícios de equações”.'],
      },
      {
        id: 'defina-prioridades',
        title: 'Defina prioridades',
        paragraphs: [
          'Urgência está ligada ao prazo; importância, ao impacto da tarefa no seu objetivo. Observe as duas coisas e escolha uma ou poucas prioridades realistas para cada período de estudo.',
        ],
      },
      {
        id: 'rotina-possivel',
        title: 'Construa uma rotina possível',
        paragraphs: [
          'Rotina não precisa significar horários rígidos. Blocos de estudo, intervalos e uma margem para imprevistos ajudam a criar um planejamento que cabe na vida real.',
        ],
      },
      {
        id: 'recuperacao-ativa',
        title: 'Use recuperação ativa',
        paragraphs: [
          'Tente recuperar a informação antes de consultar imediatamente o material. Esse esforço ajuda você a perceber o que já compreendeu e o que ainda precisa revisar.',
        ],
        examples: ['Responder perguntas', 'Usar flashcards', 'Fazer autoexplicação', 'Resolver exercícios'],
      },
      {
        id: 'revisoes-espacadas',
        title: 'Distribua revisões ao longo do tempo',
        paragraphs: [
          'Revisar o conteúdo em momentos diferentes evita concentrar tudo de uma vez e cria novas oportunidades de recuperar e conectar o que foi aprendido.',
        ],
      },
      {
        id: 'faca-pausas',
        title: 'Faça pausas',
        paragraphs: [
          'Pausas entre blocos ajudam a sustentar a atenção e tornam a rotina mais viável. Planejá-las também evita que descansar pareça uma interrupção inesperada.',
        ],
      },
      {
        id: 'ajuste-o-metodo',
        title: 'Ajuste seu método',
        paragraphs: [
          'Não existe uma única técnica correta para todas as pessoas e situações. Observe seus resultados, o tipo de conteúdo e as condições disponíveis para ajustar o método.',
        ],
      },
      {
        id: 'procure-ajuda',
        title: 'Procure ajuda quando necessário',
        paragraphs: [
          'Professores, colegas, a escola, responsáveis e serviços de apoio educacional podem ajudar a esclarecer dúvidas e organizar alternativas quando estudar sozinho não for suficiente.',
        ],
      },
    ],
    relatedGuides: ['pesquisa-inteligente-ia'],
  },
  {
    slug: 'pesquisa-inteligente-ia',
    category: 'pesquisa-ia',
    title: 'Pesquisa inteligente com IA: por onde começar',
    summary:
      'Aprenda a usar mecanismos de busca e inteligência artificial como ferramentas de apoio sem deixar de verificar informações.',
    description:
      'Pesquisar bem não significa aceitar a primeira resposta encontrada. Significa formular perguntas, comparar fontes e verificar o que você encontrou.',
    readTime: 9,
    tags: ['pesquisa', 'IA', 'fontes', 'verificação'],
    sections: [
      {
        id: 'pergunta-clara',
        title: 'Transforme sua dúvida em uma pergunta clara',
        paragraphs: ['Delimite o tema, o contexto e o que você precisa descobrir. Uma pergunta clara orienta buscas melhores e facilita comparar respostas.'],
      },
      {
        id: 'palavras-chave',
        title: 'Comece por palavras-chave',
        paragraphs: ['Selecione os termos centrais da dúvida e teste combinações mais específicas. Ajuste as palavras quando os resultados estiverem amplos demais.'],
      },
      {
        id: 'compare-fontes',
        title: 'Compare mais de uma fonte',
        paragraphs: ['Não dependa de um único resultado. Procure convergências, diferenças e evidências em fontes independentes e adequadas ao assunto.'],
      },
      {
        id: 'autoria',
        title: 'Identifique autoria e instituição responsável',
        paragraphs: ['Verifique quem publicou, sua relação com o tema e se há uma instituição responsável pelo conteúdo.'],
      },
      {
        id: 'data-contexto',
        title: 'Observe data e contexto',
        paragraphs: ['Uma informação pode ter sido correta em outro momento ou contexto. Confira a data, o local e as condições às quais ela se aplica.'],
      },
      {
        id: 'ia-como-apoio',
        title: 'Use IA como apoio, não como autoridade final',
        paragraphs: ['Sistemas de IA podem ajudar a explicar e organizar ideias, mas também podem errar ou inventar respostas e referências. Confirme as informações importantes em fontes confiáveis.'],
      },
      {
        id: 'verifique-afirmacoes',
        title: 'Verifique afirmações importantes',
        paragraphs: ['Procure a origem de dados, regras e citações. Em temas educacionais oficiais, dê preferência aos canais das instituições responsáveis.'],
      },
      {
        id: 'aprender-nao-copiar',
        title: 'Diferencie aprender de copiar',
        paragraphs: ['Use as ferramentas para formular perguntas, testar seu entendimento e revisar ideias. Reescreva com compreensão e siga as regras da atividade.'],
      },
      {
        id: 'dados-pessoais',
        title: 'Proteja seus dados pessoais',
        paragraphs: ['Evite compartilhar documentos, senhas, endereços, dados escolares ou informações privadas em mecanismos de busca e sistemas de IA.'],
      },
      {
        id: 'registre-fontes',
        title: 'Registre as fontes utilizadas',
        paragraphs: ['Anote título, autoria, instituição, endereço e data de acesso. Isso permite revisar o caminho da pesquisa e reconhecer o trabalho consultado.'],
      },
    ],
    relatedGuides: ['organizacao-de-estudos'],
  },
  {
    slug: 'fiz-enem-e-agora',
    category: 'enem',
    title: 'Fiz o ENEM. E agora?',
    summary: 'Entenda os próximos passos depois da prova e como pesquisar caminhos para utilizar sua nota.',
    description:
      'Depois do ENEM, a nota pode participar de diferentes processos seletivos. As regras e datas mudam, por isso a consulta a fontes oficiais é essencial.',
    readTime: 8,
    tags: ['ENEM', 'Sisu', 'Prouni', 'Fies', 'ensino superior'],
    sections: [
      { id: 'resultado', title: 'Aguarde e consulte o resultado nos canais oficiais', paragraphs: ['Acompanhe a divulgação nos canais oficiais do exame. Evite confiar em datas ou links encaminhados sem verificar a origem.'] },
      { id: 'notas', title: 'Entenda suas notas', paragraphs: ['Observe as notas de cada área e da redação. Cada processo define seus próprios critérios, pesos e requisitos, que podem mudar.'] },
      { id: 'cursos-instituicoes', title: 'Pesquise cursos e instituições', paragraphs: ['Compare o que é estudado, modalidade, localização, estrutura e formas de ingresso antes de organizar suas opções.'] },
      { id: 'sisu', title: 'Conheça o Sisu', paragraphs: ['O Sisu é um processo do governo federal que pode usar notas do ENEM para vagas em instituições públicas. Consulte regras, requisitos e calendário no canal oficial vigente.'] },
      { id: 'prouni', title: 'Conheça o Prouni', paragraphs: ['O Prouni oferece bolsas em instituições privadas conforme critérios definidos em cada edição. Verifique requisitos e prazos nos canais oficiais.'] },
      { id: 'fies', title: 'Conheça o Fies', paragraphs: ['O Fies é um programa de financiamento estudantil com regras próprias. Consulte as condições atualizadas antes de considerar essa alternativa.'] },
      { id: 'processos-proprios', title: 'Verifique vestibulares e processos próprios', paragraphs: ['Instituições podem manter vestibulares, editais e formas de ingresso próprios, inclusive usando a nota do ENEM. Consulte diretamente cada instituição.'] },
      { id: 'compare', title: 'Compare alternativas', paragraphs: ['Considere curso, instituição, modalidade, deslocamento, custos e possibilidades de apoio. Registre vantagens, limites e dúvidas de cada opção.'] },
      { id: 'editais', title: 'Leia editais', paragraphs: ['O edital reúne as regras oficiais do processo. Leia requisitos, documentos, etapas e critérios antes de se inscrever.'] },
      { id: 'prazos', title: 'Organize prazos', paragraphs: ['Monte uma lista com datas consultadas nos canais oficiais e revise-a com frequência, pois calendários e regras podem mudar.'] },
    ],
    sources: [
      { label: 'Portal do Ministério da Educação', url: 'https://www.gov.br/mec/pt-br' },
    ],
    relatedGuides: ['escolha-de-curso'],
  },
  {
    slug: 'escolha-de-curso',
    category: 'ensino-superior',
    title: 'Como escolher um curso superior',
    summary: 'Perguntas para conectar interesses, realidade, possibilidades acadêmicas e caminhos profissionais.',
    description:
      'Escolher um curso não exige ter toda a vida decidida. A escolha pode ser construída pesquisando, comparando e entendendo diferentes possibilidades.',
    readTime: 9,
    tags: ['universidade', 'curso', 'carreira', 'escolhas'],
    sections: [
      { id: 'interesses', title: 'Observe seus interesses', paragraphs: ['Perceba os assuntos, atividades e problemas que despertam sua curiosidade. Interesses são pistas para pesquisar, não uma obrigação de resposta imediata.'] },
      { id: 'o-que-se-estuda', title: 'Pesquise o que realmente se estuda no curso', paragraphs: ['Vá além do nome: leia a apresentação do curso, disciplinas, projetos e objetivos de formação nas páginas das instituições.'] },
      { id: 'grades', title: 'Compare grades curriculares', paragraphs: ['Cursos com o mesmo nome podem ter ênfases diferentes. Compare disciplinas obrigatórias, optativas, estágios e atividades práticas.'] },
      { id: 'instituicoes', title: 'Pesquise instituições', paragraphs: ['Consulte canais oficiais para conhecer reconhecimento, estrutura, apoio estudantil, localização e processos de ingresso.'] },
      { id: 'modalidades', title: 'Entenda modalidades de ensino', paragraphs: ['Presencial, semipresencial e a distância exigem rotinas e recursos diferentes. Verifique como o curso escolhido é realmente oferecido.'] },
      { id: 'logistica-custos', title: 'Observe logística e custos', paragraphs: ['Considere mensalidade quando houver, materiais, internet, alimentação, transporte, moradia e tempo de deslocamento. Pesquise bolsas e apoios disponíveis.'] },
      { id: 'possibilidades-profissionais', title: 'Pesquise possibilidades profissionais', paragraphs: ['Investigue áreas de atuação, atividades cotidianas e caminhos de formação complementar sem tratar uma possibilidade como garantia.'] },
      { id: 'pessoas-da-area', title: 'Converse com pessoas da área', paragraphs: ['Pergunte a estudantes, profissionais e professores sobre rotinas, desafios e diferentes trajetórias. Compare relatos em vez de depender de uma única experiência.'] },
      { id: 'nome-do-curso', title: 'Evite decidir apenas pelo nome do curso', paragraphs: ['Nomes parecidos podem esconder formações diferentes, e nomes distintos podem compartilhar áreas de atuação. Use documentos e currículos para comparar.'] },
      { id: 'escolhas-mudam', title: 'Aceite que escolhas podem mudar', paragraphs: ['Escolher é tomar uma decisão com as informações disponíveis agora. Novos interesses e circunstâncias podem levar a ajustes ao longo do caminho.'] },
    ],
    relatedGuides: ['fiz-enem-e-agora'],
  },
]
