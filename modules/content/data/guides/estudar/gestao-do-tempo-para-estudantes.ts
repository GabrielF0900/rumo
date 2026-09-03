import type { Guide } from '@/modules/content/domain/guide'

export const gestaoDoTempoParaEstudantesGuide = {
  slug: "gestao-do-tempo-para-estudantes",
  category: "estudar",
  title: "Gestão do tempo para estudantes",
  summary: "Aprender a priorizar, estimar tempo, dividir tarefas e lidar com atrasos sem abandonar o plano.",
  description: "Aprender a priorizar, estimar tempo, dividir tarefas e lidar com atrasos sem abandonar o plano. Este guia deve ser lido como orientação educativa e prática, não como uma fórmula única. A proposta da Rumo é ajudar o estudante a compreender o tema, tomar decisões mais informadas e transformar a leitura em uma próxima ação concreta.",
  readTime: 8,
  tags: [
    "gestao",
    "tempo",
    "estudantes",
    "aprender",
    "priorizar",
    "estimar",
    "dividir"
  ],
  learningObjectives: [
    "Diferencie tempo disponível de tempo realmente utilizável, descontando transições, alimentação, deslocamentos e descanso.",
    "Agrupe tarefas semelhantes para reduzir trocas frequentes de contexto.",
    "Use estimativas e depois compare com o tempo real para melhorar planejamento futuro.",
    "Reserve blocos menores para tarefas de manutenção e blocos maiores para problemas que exigem raciocínio profundo.",
    "Defina prioridades semanais e limite o número de tarefas críticas por dia.",
    "Quando houver atraso, replaneje o restante do sistema em vez de tentar 'pagar' tudo com privação de sono.",
    "O objetivo é sair da leitura com critérios para tomar decisões, e não apenas memorizar uma lista de dicas.",
    "A estratégia deve produzir evidência observável de compreensão, organização, segurança, acesso ou avanço."
  ],
  sections: [
    {
      "title": "Princípios para compreender o tema",
      "paragraphs": [
        "A literatura de aprendizagem não sustenta uma única técnica universal. A base mais consistente para esta categoria é combinar prática de recuperação, distribuição do estudo no tempo, prática orientada por erros e escolha de estratégias adequadas ao conteúdo. Sensação de familiaridade não é equivalente a capacidade de recordar ou aplicar."
      ],
      "note": "Evitar linguagem absoluta como “garante”, “funciona para todos” ou “aprenda X% mais”. Preferir “pode ajudar”, “teste”, “observe” e “adapte”.",
      "id": "principios-para-compreender-o-tema"
    },
    {
      "title": "Diferencie tempo disponível de tempo realmente utilizável, descontando tr…",
      "paragraphs": [
        "Diferencie tempo disponível de tempo realmente utilizável, descontando transições, alimentação, deslocamentos e descanso."
      ],
      "id": "diferencie-tempo-disponivel-de-tempo-realmente-utilizavel-descontando-tr"
    },
    {
      "title": "Agrupe tarefas semelhantes para reduzir trocas frequentes de contexto",
      "paragraphs": [
        "Agrupe tarefas semelhantes para reduzir trocas frequentes de contexto."
      ],
      "id": "agrupe-tarefas-semelhantes-para-reduzir-trocas-frequentes-de-contexto"
    },
    {
      "title": "Use estimativas e depois compare com o tempo real para melhorar planejame…",
      "paragraphs": [
        "Use estimativas e depois compare com o tempo real para melhorar planejamento futuro."
      ],
      "id": "use-estimativas-e-depois-compare-com-o-tempo-real-para-melhorar-planejame"
    },
    {
      "title": "Reserve blocos menores para tarefas de manutenção e blocos maiores para p…",
      "paragraphs": [
        "Reserve blocos menores para tarefas de manutenção e blocos maiores para problemas que exigem raciocínio profundo."
      ],
      "id": "reserve-blocos-menores-para-tarefas-de-manutencao-e-blocos-maiores-para-p"
    },
    {
      "title": "Defina prioridades semanais e limite o número de tarefas críticas por dia",
      "paragraphs": [
        "Defina prioridades semanais e limite o número de tarefas críticas por dia."
      ],
      "id": "defina-prioridades-semanais-e-limite-o-numero-de-tarefas-criticas-por-dia"
    },
    {
      "title": "Quando houver atraso, replaneje o restante do sistema em vez de tentar 'p…",
      "paragraphs": [
        "Quando houver atraso, replaneje o restante do sistema em vez de tentar 'pagar' tudo com privação de sono."
      ],
      "id": "quando-houver-atraso-replaneje-o-restante-do-sistema-em-vez-de-tentar-p"
    },
    {
      "title": "Cenários e exemplos desenvolvidos",
      "paragraphs": [],
      "examples": [
        "Cenário escolar: um estudante tem duas provas e um trabalho na mesma semana. Em vez de estudar tudo de forma genérica, aplica o princípio de gestao-do-tempo-para-estudantes para transformar a situação em decisões concretas.",
        "Pergunta de mediação: o que está sob controle do estudante?",
        "Pergunta de mediação: qual informação precisa ser confirmada?",
        "Pergunta de mediação: qual é o menor próximo passo útil?",
        "Cenário de dificuldade: após uma sessão, o estudante percebe que reconhece o conteúdo quando lê, mas não consegue explicar sem consultar. A ação muda de releitura para tentativa de recuperação e correção.",
        "Pergunta de mediação: o que está sob controle do estudante?",
        "Pergunta de mediação: qual informação precisa ser confirmada?",
        "Pergunta de mediação: qual é o menor próximo passo útil?",
        "Cenário de pouco tempo: há apenas 25 minutos disponíveis. O objetivo passa a ser uma tarefa fechada e útil, não 'compensar' horas perdidas.",
        "Pergunta de mediação: o que está sob controle do estudante?",
        "Pergunta de mediação: qual informação precisa ser confirmada?",
        "Pergunta de mediação: qual é o menor próximo passo útil?"
      ],
      "id": "cenarios-e-exemplos-desenvolvidos"
    },
    {
      "title": "Erros comuns a evitar",
      "paragraphs": [],
      "warning": "Confundir sensação de familiaridade com domínio real. • Copiar uma estratégia pronta sem considerar objetivo e contexto. • Tentar resolver tudo de uma vez em vez de decompor o problema. • Usar uma única fonte para uma decisão importante. • Ignorar prazos, condições, exceções ou regras específicas. • Desistir de uma estratégia sem observar por que ela falhou. • Transformar orientação em cobrança excessiva ou perfeccionismo.",
      "id": "erros-comuns-a-evitar"
    },
    {
      "title": "Adaptação: Pouco tempo disponível",
      "paragraphs": [],
      "tips": [
        "Reduzir a atividade para uma ação de 10–20 minutos e preservar o critério principal do guia.",
        "Registrar o ponto de parada para facilitar retomada."
      ],
      "id": "adaptacao-pouco-tempo-disponivel"
    },
    {
      "title": "Adaptação: Dificuldade para começar",
      "paragraphs": [],
      "tips": [
        "Preparar ambiente e material antes do horário previsto.",
        "Definir uma tarefa mínima e um critério claro de conclusão."
      ],
      "id": "adaptacao-dificuldade-para-comecar"
    },
    {
      "title": "Adaptação: Uso no celular",
      "paragraphs": [],
      "tips": [
        "Priorizar parágrafos curtos, headings claros, checklists e exemplos que caibam em leitura vertical.",
        "Evitar tabelas largas como único meio de explicar o conteúdo."
      ],
      "id": "adaptacao-uso-no-celular"
    },
    {
      "title": "Adaptação: Necessidades de acessibilidade",
      "paragraphs": [],
      "tips": [
        "Estruturar títulos semanticamente, manter linguagem clara e oferecer alternativas para elementos visuais.",
        "Permitir navegação por teclado, foco visível, contraste e leitura por tecnologia assistiva no frontend."
      ],
      "id": "adaptacao-necessidades-de-acessibilidade"
    },
    {
      "title": "Adaptação: Estudante com ritmo diferente",
      "paragraphs": [],
      "tips": [
        "Permitir repetição, pausas e retomada sem transformar velocidade em indicador de capacidade.",
        "Oferecer exemplos graduais e caminho de aprofundamento opcional."
      ],
      "id": "adaptacao-estudante-com-ritmo-diferente"
    },
    {
      "title": "Atividade prática",
      "paragraphs": [
        "Missão: aplique o princípio de Gestão do tempo para estudantes a uma situação real desta semana."
      ],
      "id": "atividade-pratica"
    },
    {
      "title": "Isso funciona para todo mundo?",
      "paragraphs": [
        "Não. O guia apresenta princípios, critérios e estratégias que precisam ser testados e adaptados ao contexto, ao conteúdo e às necessidades da pessoa."
      ],
      "id": "isso-funciona-para-todo-mundo"
    },
    {
      "title": "Como saber se está funcionando?",
      "paragraphs": [
        "Defina um indicador observável: conseguir explicar, resolver, cumprir uma tarefa, reduzir erros, localizar informação correta ou realizar o próximo passo com mais autonomia."
      ],
      "id": "como-saber-se-esta-funcionando"
    },
    {
      "title": "Quando devo mudar a estratégia?",
      "paragraphs": [
        "Quando a abordagem não produz o resultado esperado após teste razoável, quando custa energia desproporcional ou quando surgem novas informações que mudam o problema."
      ],
      "id": "quando-devo-mudar-a-estrategia"
    },
    {
      "title": "Perguntas para aprofundar",
      "paragraphs": [],
      "bullets": [
        "Qual é a diferença entre conhecer uma dica e conseguir aplicá-la?",
        "Que evidência mostraria que houve progresso?",
        "Qual parte deste tema depende de informação atualizada?",
        "Que decisão muda quando o contexto muda?",
        "Qual erro seria mais provável para alguém que aplica o conselho de forma literal?",
        "Como tornar a orientação mais acessível para alguém com pouco tempo, pouca familiaridade digital ou outra forma de interação?",
        "Que fonte é mais adequada para confirmar o ponto mais importante deste guia?"
      ],
      "id": "perguntas-para-aprofundar"
    },
    {
      "title": "Informações e atualizações",
      "paragraphs": [
        "✅ Conteúdo relativamente estável: revisar periodicamente fontes, linguagem e exemplos, mesmo quando o princípio pedagógico não mudar.",
        "Sugestão de manutenção: registrar updatedAt, revisar links quebrados, reler fontes oficiais e manter um pequeno changelog editorial quando houver mudança relevante."
      ],
      "id": "informacoes-e-atualizacoes"
    },
    {
      "id": "exemplos-estrategicos-complementares",
      "title": "Exemplos estratégicos para aplicar",
      "paragraphs": [
        "Escolha uma situação real relacionada a Gestão do tempo para estudantes. Escreva como agiria espontaneamente. Depois refaça a decisão usando um critério do guia e defina uma evidência que mostraria se a nova abordagem ajudou."
      ],
      "examples": [
        "Objetivo concreto. Abordagem fraca: A tarefa é descrita de forma vaga. Aplicação melhor: Transforma o objetivo em ação observável e pequena. Por que é pedagógico: Facilita começar e verificar conclusão.",
        "Teste real. Abordagem fraca: A técnica é lida, mas nunca aplicada. Aplicação melhor: Usa-a em um conteúdo verdadeiro e registra resultado. Por que é pedagógico: Move o guia de teoria para prática.",
        "Ajuste. Abordagem fraca: A primeira tentativa não funciona. Aplicação melhor: Identifica causa provável e muda uma variável por vez. Por que é pedagógico: Ensina autorregulação."
      ],
      "tips": [
        "O que mudou na segunda abordagem?",
        "Qual critério ficou visível?",
        "Como adaptar à sua realidade?"
      ],
      "warning": "Transformar uma dica em regra universal. • Medir sucesso apenas pelo tempo gasto. • Copiar método alheio sem adaptação."
    }
  ],
  checklist: [
    "Escreva a situação em uma frase.",
    "Identifique o resultado que você quer alcançar.",
    "Liste o que já sabe e o que ainda precisa descobrir.",
    "Escolha uma das estratégias apresentadas neste guia.",
    "Defina uma ação pequena com início e fim.",
    "Execute sem buscar perfeição.",
    "Registre o que aconteceu.",
    "Compare resultado e expectativa.",
    "Decida: manter, ajustar ou trocar a estratégia.",
    "Agende o próximo passo, se houver."
  ],
  sources: [
    {
      "label": "Practicing Retrieval Facilitates Learning — Annual Review of Psychology / PubMed",
      "url": "https://pubmed.ncbi.nlm.nih.gov/33006925/",
      "institution": "Revisão sobre prática de recuperação e seus efeitos na aprendizagem e retenção."
    },
    {
      "label": "Distributed practice in verbal recall tasks — Psychological Bulletin / PubMed",
      "url": "https://pubmed.ncbi.nlm.nih.gov/16719566/",
      "institution": "Meta-análise clássica sobre prática distribuída e intervalos de estudo."
    },
    {
      "label": "Systematic review of distributed practice and retrieval practice in health professions education — PubMed",
      "url": "https://pubmed.ncbi.nlm.nih.gov/37615780/",
      "institution": "Revisão sistemática com dezenas de experimentos sobre espaçamento e recuperação."
    },
    {
      "label": "Organizing Instruction and Study to Improve Student Learning — What Works Clearinghouse",
      "url": "https://ies.ed.gov/ncee/wwc/PracticeGuide/1",
      "institution": "Guia baseado em evidências sobre espaçamento, exemplos resolvidos, representações e quizzes."
    },
    {
      "label": "Academic interventions for academic procrastination: A review of the literature — PubMed",
      "url": "https://pubmed.ncbi.nlm.nih.gov/29485384/",
      "institution": "Trata procrastinação acadêmica como fenômeno ligado à autorregulação e ao contexto."
    },
    {
      "label": "Academic Procrastination in Children and Adolescents: A Scoping Review — PubMed",
      "url": "https://pubmed.ncbi.nlm.nih.gov/37371248/",
      "institution": "Revisão focada em crianças e adolescentes e suas relações com desempenho e bem-estar."
    }
  ],
  relatedGuides: [
    "como-estudar-quando-voce-esta-cansado",
    "como-fazer-anotacoes-uteis"
  ],
  updatedAt: "2026-09-03",
} satisfies Guide
