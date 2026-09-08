# PROMPT MESTRE — POVOAMENTO COMPLETO DOS 70 GUIAS DA RUMO

Você está trabalhando no projeto **Rumo**, uma plataforma educacional web.

Sua tarefa é fazer uma migração editorial e estrutural completa dos **70 guias pedagógicos** descritos no arquivo `contexto-pedagogico.md`, usando um único layout reutilizável para todos os guias e um arquivo TypeScript isolado para cada conteúdo.

Você DEVE primeiro analisar a arquitetura atual do projeto, depois ler integralmente `contexto-pedagogico.md`, depois conferir a lista de 70 identificadores deste prompt e, só então, criar os arquivos.

Não faça commit.
Não faça push.
Não altere conteúdo fora do escopo definido.


## 1. OBJETIVO ARQUITETURAL

Separar responsabilidades da seguinte forma:

- **Domínio** define o contrato dos dados.
- **Arquivos editoriais individuais** armazenam somente o conteúdo de cada guia.
- **Índices de categoria** agregam os guias daquela categoria.
- **Índice global** agrega todas as categorias.
- **Content service** consulta os dados.
- **GuidePage e componentes de guide** cuidam exclusivamente da apresentação.
- Os 70 guias devem usar **o mesmo layout reutilizável**.
- Nenhum guia deve possuir uma página, JSX ou CSS exclusivo apenas para si.


## 2. FONTE EDITORIAL OBRIGATÓRIA

Leia integralmente o arquivo:

```text
contexto-pedagogico.md
```

Ele é a **fonte editorial principal** dos 70 guias.

Para cada guia:

1. localize o título exato no `contexto-pedagogico.md`;
2. localize o slug correspondente;
3. leia todo o bloco daquele guia, do início até o separador `---`;
4. converta o conteúdo para o contrato `Guide`;
5. preserve o sentido pedagógico;
6. não misture conteúdo de dois guias diferentes;
7. não invente estatísticas, porcentagens, estudos ou fontes;
8. não invente datas de ENEM, Sisu, Prouni, Fies, bolsas ou processos;
9. preserve alertas editoriais do arquivo;
10. quando o MD não trouxer informação suficiente para um campo opcional, omita o campo em vez de inventar.

O arquivo `contexto-pedagogico.md` deve ser lido antes de criar qualquer um dos 70 arquivos.


## 3. CONTRATO DE DADOS ESPERADO

O projeto deve usar este contrato em `modules/content/domain/guide.ts`:

```ts
export interface GuideSource {
  label: string
  url: string
  institution?: string
  accessedAt?: string
}

export interface GuideSection {
  id: string
  title: string
  paragraphs: string[]
  bullets?: string[]
  tips?: string[]
  examples?: string[]
  warning?: string
  note?: string
}

export interface Guide {
  slug: string
  category: string
  title: string
  summary: string
  description: string
  readTime: number
  tags: string[]
  learningObjectives?: string[]
  sections: GuideSection[]
  checklist?: string[]
  sources?: GuideSource[]
  relatedGuides?: string[]
  updatedAt?: string
}

```


## 4. LOCAL EXATO DOS ARQUIVOS

Cada guia deve ficar em um arquivo independente:

```text
modules/content/data/guides/<categoria>/<slug>.ts
```

Estrutura final:

```text
modules/content/data/guides/
├── index.ts
├── estudar/
│   ├── index.ts
│   └── <arquivos da categoria>
├── pesquisa-ia/
│   ├── index.ts
│   └── <arquivos da categoria>
├── enem/
│   ├── index.ts
│   └── <arquivos da categoria>
├── ensino-superior/
│   ├── index.ts
│   └── <arquivos da categoria>
├── carreira/
│   ├── index.ts
│   └── <arquivos da categoria>
└── inclusao/
    ├── index.ts
    └── <arquivos da categoria>
```


## 5. FORMATO OBRIGATÓRIO DE CADA ARQUIVO

Cada arquivo deve:

- importar `Guide`;
- exportar um único objeto;
- usar o nome de exportação definido na lista de identificadores deste prompt;
- terminar com `satisfies Guide`;
- conter somente dados editoriais;
- não conter JSX;
- não conter componentes React;
- não conter funções de renderização;
- não conter CSS.

Modelo:

```ts
import type { Guide } from '@/modules/content/domain/guide'

export const exemploGuide = {
  slug: 'exemplo',
  category: 'estudar',
  title: 'Título exato',
  summary: '...',
  description: '...',
  readTime: 8,
  tags: ['...'],
  learningObjectives: ['...'],
  sections: [
    {
      id: '...',
      title: '...',
      paragraphs: ['...'],
      bullets: ['...'],
      tips: ['...'],
      examples: ['...'],
      warning: '...',
      note: '...',
    },
  ],
  checklist: ['...'],
  sources: [
    {
      label: '...',
      url: '...',
      institution: '...',
    },
  ],
  relatedGuides: ['...'],
  updatedAt: '2026-09-03',
} satisfies Guide
```

Campos opcionais devem ser incluídos somente quando houver dados adequados no material.


## 6. LISTA CANÔNICA DOS 70 GUIAS E IDENTIFICADORES

Use esta lista como mapa obrigatório de criação. O **título, slug, categoria, caminho e export** devem ser respeitados.

1. **Como organizar seus estudos sem se sobrecarregar**
   - categoria: `estudar`
   - slug: `como-organizar-seus-estudos-sem-se-sobrecarregar`
   - export: `comoOrganizarSeusEstudosSemSeSobrecarregarGuide`
   - arquivo: `modules/content/data/guides/estudar/como-organizar-seus-estudos-sem-se-sobrecarregar.ts`

2. **Técnicas de estudo que realmente funcionam**
   - categoria: `estudar`
   - slug: `tecnicas-de-estudo-que-realmente-funcionam`
   - export: `tecnicasDeEstudoQueRealmenteFuncionamGuide`
   - arquivo: `modules/content/data/guides/estudar/tecnicas-de-estudo-que-realmente-funcionam.ts`

3. **Como revisar e fixar o conteúdo de forma eficiente**
   - categoria: `estudar`
   - slug: `como-revisar-e-fixar-o-conteudo-de-forma-eficiente`
   - export: `comoRevisarEFixarOConteudoDeFormaEficienteGuide`
   - arquivo: `modules/content/data/guides/estudar/como-revisar-e-fixar-o-conteudo-de-forma-eficiente.ts`

4. **Foco e concentração: como reduzir distrações**
   - categoria: `estudar`
   - slug: `foco-e-concentracao-como-reduzir-distracoes`
   - export: `focoEConcentracaoComoReduzirDistracoesGuide`
   - arquivo: `modules/content/data/guides/estudar/foco-e-concentracao-como-reduzir-distracoes.ts`

5. **Como montar uma rotina de estudos realista**
   - categoria: `estudar`
   - slug: `como-montar-uma-rotina-de-estudos-realista`
   - export: `comoMontarUmaRotinaDeEstudosRealistaGuide`
   - arquivo: `modules/content/data/guides/estudar/como-montar-uma-rotina-de-estudos-realista.ts`

6. **Metas de estudo: como definir objetivos que fazem sentido**
   - categoria: `estudar`
   - slug: `metas-de-estudo-como-definir-objetivos-que-fazem-sentido`
   - export: `metasDeEstudoComoDefinirObjetivosQueFazemSentidoGuide`
   - arquivo: `modules/content/data/guides/estudar/metas-de-estudo-como-definir-objetivos-que-fazem-sentido.ts`

7. **Gestão do tempo para estudantes**
   - categoria: `estudar`
   - slug: `gestao-do-tempo-para-estudantes`
   - export: `gestaoDoTempoParaEstudantesGuide`
   - arquivo: `modules/content/data/guides/estudar/gestao-do-tempo-para-estudantes.ts`

8. **Como estudar quando você está cansado**
   - categoria: `estudar`
   - slug: `como-estudar-quando-voce-esta-cansado`
   - export: `comoEstudarQuandoVoceEstaCansadoGuide`
   - arquivo: `modules/content/data/guides/estudar/como-estudar-quando-voce-esta-cansado.ts`

9. **Como fazer anotações úteis**
   - categoria: `estudar`
   - slug: `como-fazer-anotacoes-uteis`
   - export: `comoFazerAnotacoesUteisGuide`
   - arquivo: `modules/content/data/guides/estudar/como-fazer-anotacoes-uteis.ts`

10. **Resumos e mapas mentais: quando ajudam e quando atrapalham**
   - categoria: `estudar`
   - slug: `resumos-e-mapas-mentais-quando-ajudam-e-quando-atrapalham`
   - export: `resumosEMapasMentaisQuandoAjudamEQuandoAtrapalhamGuide`
   - arquivo: `modules/content/data/guides/estudar/resumos-e-mapas-mentais-quando-ajudam-e-quando-atrapalham.ts`

11. **Como usar questões e simulados para aprender**
   - categoria: `estudar`
   - slug: `como-usar-questoes-e-simulados-para-aprender`
   - export: `comoUsarQuestoesESimuladosParaAprenderGuide`
   - arquivo: `modules/content/data/guides/estudar/como-usar-questoes-e-simulados-para-aprender.ts`

12. **Como lidar com procrastinação nos estudos**
   - categoria: `estudar`
   - slug: `como-lidar-com-procrastinacao-nos-estudos`
   - export: `comoLidarComProcrastinacaoNosEstudosGuide`
   - arquivo: `modules/content/data/guides/estudar/como-lidar-com-procrastinacao-nos-estudos.ts`

13. **Como estudar matemática sem decorar tudo**
   - categoria: `estudar`
   - slug: `como-estudar-matematica-sem-decorar-tudo`
   - export: `comoEstudarMatematicaSemDecorarTudoGuide`
   - arquivo: `modules/content/data/guides/estudar/como-estudar-matematica-sem-decorar-tudo.ts`

14. **Como melhorar em interpretação de texto**
   - categoria: `estudar`
   - slug: `como-melhorar-em-interpretacao-de-texto`
   - export: `comoMelhorarEmInterpretacaoDeTextoGuide`
   - arquivo: `modules/content/data/guides/estudar/como-melhorar-em-interpretacao-de-texto.ts`

15. **Como estudar para provas sem deixar tudo para a última hora**
   - categoria: `estudar`
   - slug: `como-estudar-para-provas-sem-deixar-tudo-para-a-ultima-hora`
   - export: `comoEstudarParaProvasSemDeixarTudoParaAUltimaHoraGuide`
   - arquivo: `modules/content/data/guides/estudar/como-estudar-para-provas-sem-deixar-tudo-para-a-ultima-hora.ts`

16. **Como fazer uma pesquisa confiável na internet**
   - categoria: `pesquisa-ia`
   - slug: `como-fazer-uma-pesquisa-confiavel-na-internet`
   - export: `comoFazerUmaPesquisaConfiavelNaInternetGuide`
   - arquivo: `modules/content/data/guides/pesquisa-ia/como-fazer-uma-pesquisa-confiavel-na-internet.ts`

17. **Pesquisa inteligente com IA: por onde começar**
   - categoria: `pesquisa-ia`
   - slug: `pesquisa-inteligente-com-ia-por-onde-comecar`
   - export: `pesquisaInteligenteComIaPorOndeComecarGuide`
   - arquivo: `modules/content/data/guides/pesquisa-ia/pesquisa-inteligente-com-ia-por-onde-comecar.ts`

18. **Como saber se uma fonte é confiável**
   - categoria: `pesquisa-ia`
   - slug: `como-saber-se-uma-fonte-e-confiavel`
   - export: `comoSaberSeUmaFonteEConfiavelGuide`
   - arquivo: `modules/content/data/guides/pesquisa-ia/como-saber-se-uma-fonte-e-confiavel.ts`

19. **Como identificar desinformação e conteúdo enganoso**
   - categoria: `pesquisa-ia`
   - slug: `como-identificar-desinformacao-e-conteudo-enganoso`
   - export: `comoIdentificarDesinformacaoEConteudoEnganosoGuide`
   - arquivo: `modules/content/data/guides/pesquisa-ia/como-identificar-desinformacao-e-conteudo-enganoso.ts`

20. **Como usar IA sem copiar trabalhos**
   - categoria: `pesquisa-ia`
   - slug: `como-usar-ia-sem-copiar-trabalhos`
   - export: `comoUsarIaSemCopiarTrabalhosGuide`
   - arquivo: `modules/content/data/guides/pesquisa-ia/como-usar-ia-sem-copiar-trabalhos.ts`

21. **Por que a IA pode errar e inventar informações**
   - categoria: `pesquisa-ia`
   - slug: `por-que-a-ia-pode-errar-e-inventar-informacoes`
   - export: `porQueAIaPodeErrarEInventarInformacoesGuide`
   - arquivo: `modules/content/data/guides/pesquisa-ia/por-que-a-ia-pode-errar-e-inventar-informacoes.ts`

22. **Como criar bons prompts para estudar**
   - categoria: `pesquisa-ia`
   - slug: `como-criar-bons-prompts-para-estudar`
   - export: `comoCriarBonsPromptsParaEstudarGuide`
   - arquivo: `modules/content/data/guides/pesquisa-ia/como-criar-bons-prompts-para-estudar.ts`

23. **Como citar fontes em trabalhos escolares**
   - categoria: `pesquisa-ia`
   - slug: `como-citar-fontes-em-trabalhos-escolares`
   - export: `comoCitarFontesEmTrabalhosEscolaresGuide`
   - arquivo: `modules/content/data/guides/pesquisa-ia/como-citar-fontes-em-trabalhos-escolares.ts`

24. **Privacidade e dados pessoais ao usar tecnologia**
   - categoria: `pesquisa-ia`
   - slug: `privacidade-e-dados-pessoais-ao-usar-tecnologia`
   - export: `privacidadeEDadosPessoaisAoUsarTecnologiaGuide`
   - arquivo: `modules/content/data/guides/pesquisa-ia/privacidade-e-dados-pessoais-ao-usar-tecnologia.ts`

25. **Como comparar duas respostas diferentes na internet**
   - categoria: `pesquisa-ia`
   - slug: `como-comparar-duas-respostas-diferentes-na-internet`
   - export: `comoCompararDuasRespostasDiferentesNaInternetGuide`
   - arquivo: `modules/content/data/guides/pesquisa-ia/como-comparar-duas-respostas-diferentes-na-internet.ts`

26. **Como começar a se preparar para o ENEM**
   - categoria: `enem`
   - slug: `como-comecar-a-se-preparar-para-o-enem`
   - export: `comoComecarASePrepararParaOEnemGuide`
   - arquivo: `modules/content/data/guides/enem/como-comecar-a-se-preparar-para-o-enem.ts`

27. **Como funciona o ENEM**
   - categoria: `enem`
   - slug: `como-funciona-o-enem`
   - export: `comoFuncionaOEnemGuide`
   - arquivo: `modules/content/data/guides/enem/como-funciona-o-enem.ts`

28. **Como estudar redação para o ENEM**
   - categoria: `enem`
   - slug: `como-estudar-redacao-para-o-enem`
   - export: `comoEstudarRedacaoParaOEnemGuide`
   - arquivo: `modules/content/data/guides/enem/como-estudar-redacao-para-o-enem.ts`

29. **Como usar provas antigas do ENEM**
   - categoria: `enem`
   - slug: `como-usar-provas-antigas-do-enem`
   - export: `comoUsarProvasAntigasDoEnemGuide`
   - arquivo: `modules/content/data/guides/enem/como-usar-provas-antigas-do-enem.ts`

30. **Como organizar um cronograma para o ENEM**
   - categoria: `enem`
   - slug: `como-organizar-um-cronograma-para-o-enem`
   - export: `comoOrganizarUmCronogramaParaOEnemGuide`
   - arquivo: `modules/content/data/guides/enem/como-organizar-um-cronograma-para-o-enem.ts`

31. **O que fazer na semana da prova**
   - categoria: `enem`
   - slug: `o-que-fazer-na-semana-da-prova`
   - export: `oQueFazerNaSemanaDaProvaGuide`
   - arquivo: `modules/content/data/guides/enem/o-que-fazer-na-semana-da-prova.ts`

32. **O que fazer no dia da prova**
   - categoria: `enem`
   - slug: `o-que-fazer-no-dia-da-prova`
   - export: `oQueFazerNoDiaDaProvaGuide`
   - arquivo: `modules/content/data/guides/enem/o-que-fazer-no-dia-da-prova.ts`

33. **Fiz o ENEM. E agora?**
   - categoria: `enem`
   - slug: `fiz-o-enem-e-agora`
   - export: `fizOEnemEAgoraGuide`
   - arquivo: `modules/content/data/guides/enem/fiz-o-enem-e-agora.ts`

34. **Como pesquisar Sisu sem se perder**
   - categoria: `enem`
   - slug: `como-pesquisar-sisu-sem-se-perder`
   - export: `comoPesquisarSisuSemSePerderGuide`
   - arquivo: `modules/content/data/guides/enem/como-pesquisar-sisu-sem-se-perder.ts`

35. **Como funciona o Prouni**
   - categoria: `enem`
   - slug: `como-funciona-o-prouni`
   - export: `comoFuncionaOProuniGuide`
   - arquivo: `modules/content/data/guides/enem/como-funciona-o-prouni.ts`

36. **Como funciona o Fies**
   - categoria: `enem`
   - slug: `como-funciona-o-fies`
   - export: `comoFuncionaOFiesGuide`
   - arquivo: `modules/content/data/guides/enem/como-funciona-o-fies.ts`

37. **Como escolher entre faculdade, curso técnico, trabalho e outros caminhos**
   - categoria: `enem`
   - slug: `como-escolher-entre-faculdade-curso-tecnico-trabalho-e-outros-caminhos`
   - export: `comoEscolherEntreFaculdadeCursoTecnicoTrabalhoEOutrosCaminhosGuide`
   - arquivo: `modules/content/data/guides/enem/como-escolher-entre-faculdade-curso-tecnico-trabalho-e-outros-caminhos.ts`

38. **Como escolher um curso superior**
   - categoria: `ensino-superior`
   - slug: `como-escolher-um-curso-superior`
   - export: `comoEscolherUmCursoSuperiorGuide`
   - arquivo: `modules/content/data/guides/ensino-superior/como-escolher-um-curso-superior.ts`

39. **Como pesquisar uma faculdade ou universidade**
   - categoria: `ensino-superior`
   - slug: `como-pesquisar-uma-faculdade-ou-universidade`
   - export: `comoPesquisarUmaFaculdadeOuUniversidadeGuide`
   - arquivo: `modules/content/data/guides/ensino-superior/como-pesquisar-uma-faculdade-ou-universidade.ts`

40. **Presencial, híbrido ou EAD: como escolher**
   - categoria: `ensino-superior`
   - slug: `presencial-hibrido-ou-ead-como-escolher`
   - export: `presencialHibridoOuEadComoEscolherGuide`
   - arquivo: `modules/content/data/guides/ensino-superior/presencial-hibrido-ou-ead-como-escolher.ts`

41. **Bacharelado, licenciatura e tecnólogo: qual a diferença**
   - categoria: `ensino-superior`
   - slug: `bacharelado-licenciatura-e-tecnologo-qual-a-diferenca`
   - export: `bachareladoLicenciaturaETecnologoQualADiferencaGuide`
   - arquivo: `modules/content/data/guides/ensino-superior/bacharelado-licenciatura-e-tecnologo-qual-a-diferenca.ts`

42. **Como ler a grade curricular de um curso**
   - categoria: `ensino-superior`
   - slug: `como-ler-a-grade-curricular-de-um-curso`
   - export: `comoLerAGradeCurricularDeUmCursoGuide`
   - arquivo: `modules/content/data/guides/ensino-superior/como-ler-a-grade-curricular-de-um-curso.ts`

43. **Como funciona a vida universitária**
   - categoria: `ensino-superior`
   - slug: `como-funciona-a-vida-universitaria`
   - export: `comoFuncionaAVidaUniversitariaGuide`
   - arquivo: `modules/content/data/guides/ensino-superior/como-funciona-a-vida-universitaria.ts`

44. **Como procurar bolsas de estudo**
   - categoria: `ensino-superior`
   - slug: `como-procurar-bolsas-de-estudo`
   - export: `comoProcurarBolsasDeEstudoGuide`
   - arquivo: `modules/content/data/guides/ensino-superior/como-procurar-bolsas-de-estudo.ts`

45. **Como avaliar custo total de uma graduação**
   - categoria: `ensino-superior`
   - slug: `como-avaliar-custo-total-de-uma-graduacao`
   - export: `comoAvaliarCustoTotalDeUmaGraduacaoGuide`
   - arquivo: `modules/content/data/guides/ensino-superior/como-avaliar-custo-total-de-uma-graduacao.ts`

46. **Como saber se quero mesmo fazer faculdade**
   - categoria: `ensino-superior`
   - slug: `como-saber-se-quero-mesmo-fazer-faculdade`
   - export: `comoSaberSeQueroMesmoFazerFaculdadeGuide`
   - arquivo: `modules/content/data/guides/ensino-superior/como-saber-se-quero-mesmo-fazer-faculdade.ts`

47. **Como aproveitar oportunidades dentro da universidade**
   - categoria: `ensino-superior`
   - slug: `como-aproveitar-oportunidades-dentro-da-universidade`
   - export: `comoAproveitarOportunidadesDentroDaUniversidadeGuide`
   - arquivo: `modules/content/data/guides/ensino-superior/como-aproveitar-oportunidades-dentro-da-universidade.ts`

48. **Como planejar os primeiros semestres da faculdade**
   - categoria: `ensino-superior`
   - slug: `como-planejar-os-primeiros-semestres-da-faculdade`
   - export: `comoPlanejarOsPrimeirosSemestresDaFaculdadeGuide`
   - arquivo: `modules/content/data/guides/ensino-superior/como-planejar-os-primeiros-semestres-da-faculdade.ts`

49. **Como montar seu primeiro currículo sem experiência**
   - categoria: `carreira`
   - slug: `como-montar-seu-primeiro-curriculo-sem-experiencia`
   - export: `comoMontarSeuPrimeiroCurriculoSemExperienciaGuide`
   - arquivo: `modules/content/data/guides/carreira/como-montar-seu-primeiro-curriculo-sem-experiencia.ts`

50. **O que colocar e o que evitar no currículo**
   - categoria: `carreira`
   - slug: `o-que-colocar-e-o-que-evitar-no-curriculo`
   - export: `oQueColocarEOQueEvitarNoCurriculoGuide`
   - arquivo: `modules/content/data/guides/carreira/o-que-colocar-e-o-que-evitar-no-curriculo.ts`

51. **Como adaptar o currículo para uma vaga**
   - categoria: `carreira`
   - slug: `como-adaptar-o-curriculo-para-uma-vaga`
   - export: `comoAdaptarOCurriculoParaUmaVagaGuide`
   - arquivo: `modules/content/data/guides/carreira/como-adaptar-o-curriculo-para-uma-vaga.ts`

52. **Como procurar estágio pela primeira vez**
   - categoria: `carreira`
   - slug: `como-procurar-estagio-pela-primeira-vez`
   - export: `comoProcurarEstagioPelaPrimeiraVezGuide`
   - arquivo: `modules/content/data/guides/carreira/como-procurar-estagio-pela-primeira-vez.ts`

53. **Como se preparar para uma entrevista**
   - categoria: `carreira`
   - slug: `como-se-preparar-para-uma-entrevista`
   - export: `comoSePrepararParaUmaEntrevistaGuide`
   - arquivo: `modules/content/data/guides/carreira/como-se-preparar-para-uma-entrevista.ts`

54. **Como responder 'fale sobre você'**
   - categoria: `carreira`
   - slug: `como-responder-fale-sobre-voce`
   - export: `comoResponderFaleSobreVoceGuide`
   - arquivo: `modules/content/data/guides/carreira/como-responder-fale-sobre-voce.ts`

55. **Como explicar projetos pessoais em processos seletivos**
   - categoria: `carreira`
   - slug: `como-explicar-projetos-pessoais-em-processos-seletivos`
   - export: `comoExplicarProjetosPessoaisEmProcessosSeletivosGuide`
   - arquivo: `modules/content/data/guides/carreira/como-explicar-projetos-pessoais-em-processos-seletivos.ts`

56. **Como criar um portfólio mesmo sendo estudante**
   - categoria: `carreira`
   - slug: `como-criar-um-portfolio-mesmo-sendo-estudante`
   - export: `comoCriarUmPortfolioMesmoSendoEstudanteGuide`
   - arquivo: `modules/content/data/guides/carreira/como-criar-um-portfolio-mesmo-sendo-estudante.ts`

57. **LinkedIn para estudantes: como começar**
   - categoria: `carreira`
   - slug: `linkedin-para-estudantes-como-comecar`
   - export: `linkedinParaEstudantesComoComecarGuide`
   - arquivo: `modules/content/data/guides/carreira/linkedin-para-estudantes-como-comecar.ts`

58. **Como pesquisar profissões antes de escolher uma área**
   - categoria: `carreira`
   - slug: `como-pesquisar-profissoes-antes-de-escolher-uma-area`
   - export: `comoPesquisarProfissoesAntesDeEscolherUmaAreaGuide`
   - arquivo: `modules/content/data/guides/carreira/como-pesquisar-profissoes-antes-de-escolher-uma-area.ts`

59. **Habilidades técnicas e comportamentais: qual a diferença**
   - categoria: `carreira`
   - slug: `habilidades-tecnicas-e-comportamentais-qual-a-diferenca`
   - export: `habilidadesTecnicasEComportamentaisQualADiferencaGuide`
   - arquivo: `modules/content/data/guides/carreira/habilidades-tecnicas-e-comportamentais-qual-a-diferenca.ts`

60. **Como construir experiência antes do primeiro emprego**
   - categoria: `carreira`
   - slug: `como-construir-experiencia-antes-do-primeiro-emprego`
   - export: `comoConstruirExperienciaAntesDoPrimeiroEmpregoGuide`
   - arquivo: `modules/content/data/guides/carreira/como-construir-experiencia-antes-do-primeiro-emprego.ts`

61. **Como lidar com rejeições em processos seletivos**
   - categoria: `carreira`
   - slug: `como-lidar-com-rejeicoes-em-processos-seletivos`
   - export: `comoLidarComRejeicoesEmProcessosSeletivosGuide`
   - arquivo: `modules/content/data/guides/carreira/como-lidar-com-rejeicoes-em-processos-seletivos.ts`

62. **Como criar um plano de carreira inicial**
   - categoria: `carreira`
   - slug: `como-criar-um-plano-de-carreira-inicial`
   - export: `comoCriarUmPlanoDeCarreiraInicialGuide`
   - arquivo: `modules/content/data/guides/carreira/como-criar-um-plano-de-carreira-inicial.ts`

63. **Acessibilidade: o que significa na prática**
   - categoria: `inclusao`
   - slug: `acessibilidade-o-que-significa-na-pratica`
   - export: `acessibilidadeOQueSignificaNaPraticaGuide`
   - arquivo: `modules/content/data/guides/inclusao/acessibilidade-o-que-significa-na-pratica.ts`

64. **Como pedir apoio na escola ou faculdade**
   - categoria: `inclusao`
   - slug: `como-pedir-apoio-na-escola-ou-faculdade`
   - export: `comoPedirApoioNaEscolaOuFaculdadeGuide`
   - arquivo: `modules/content/data/guides/inclusao/como-pedir-apoio-na-escola-ou-faculdade.ts`

65. **Diferentes formas de aprender sem criar rótulos**
   - categoria: `inclusao`
   - slug: `diferentes-formas-de-aprender-sem-criar-rotulos`
   - export: `diferentesFormasDeAprenderSemCriarRotulosGuide`
   - arquivo: `modules/content/data/guides/inclusao/diferentes-formas-de-aprender-sem-criar-rotulos.ts`

66. **Como organizar estudos quando mudanças de rotina atrapalham**
   - categoria: `inclusao`
   - slug: `como-organizar-estudos-quando-mudancas-de-rotina-atrapalham`
   - export: `comoOrganizarEstudosQuandoMudancasDeRotinaAtrapalhamGuide`
   - arquivo: `modules/content/data/guides/inclusao/como-organizar-estudos-quando-mudancas-de-rotina-atrapalham.ts`

67. **Tecnologia assistiva e recursos de acessibilidade**
   - categoria: `inclusao`
   - slug: `tecnologia-assistiva-e-recursos-de-acessibilidade`
   - export: `tecnologiaAssistivaERecursosDeAcessibilidadeGuide`
   - arquivo: `modules/content/data/guides/inclusao/tecnologia-assistiva-e-recursos-de-acessibilidade.ts`

68. **Como tornar materiais de estudo mais acessíveis**
   - categoria: `inclusao`
   - slug: `como-tornar-materiais-de-estudo-mais-acessiveis`
   - export: `comoTornarMateriaisDeEstudoMaisAcessiveisGuide`
   - arquivo: `modules/content/data/guides/inclusao/como-tornar-materiais-de-estudo-mais-acessiveis.ts`

69. **Respeito às diferenças no ambiente escolar**
   - categoria: `inclusao`
   - slug: `respeito-as-diferencas-no-ambiente-escolar`
   - export: `respeitoAsDiferencasNoAmbienteEscolarGuide`
   - arquivo: `modules/content/data/guides/inclusao/respeito-as-diferencas-no-ambiente-escolar.ts`

70. **Onde buscar ajuda quando uma dificuldade está atrapalhando os estudos**
   - categoria: `inclusao`
   - slug: `onde-buscar-ajuda-quando-uma-dificuldade-esta-atrapalhando-os-estudos`
   - export: `ondeBuscarAjudaQuandoUmaDificuldadeEstaAtrapalhandoOsEstudosGuide`
   - arquivo: `modules/content/data/guides/inclusao/onde-buscar-ajuda-quando-uma-dificuldade-esta-atrapalhando-os-estudos.ts`


## 7. ÍNDICES POR CATEGORIA

Após criar os arquivos, crie/atualize:

```text
modules/content/data/guides/estudar/index.ts
modules/content/data/guides/pesquisa-ia/index.ts
modules/content/data/guides/enem/index.ts
modules/content/data/guides/ensino-superior/index.ts
modules/content/data/guides/carreira/index.ts
modules/content/data/guides/inclusao/index.ts
```

Cada índice deve importar todos os guias daquela categoria e exportar um array tipado ou inferido de guias.

Exemplo:

```ts
import { organizacaoDeEstudosGuide } from './organizacao-de-estudos'
import { tecnicasDeEstudoGuide } from './tecnicas-de-estudo'

export const estudarGuides = [
  organizacaoDeEstudosGuide,
  tecnicasDeEstudoGuide,
]
```

Depois crie/atualize:

```text
modules/content/data/guides/index.ts
```

com:

```ts
import type { Guide } from '@/modules/content/domain/guide'

import { estudarGuides } from './estudar'
import { pesquisaIaGuides } from './pesquisa-ia'
import { enemGuides } from './enem'
import { ensinoSuperiorGuides } from './ensino-superior'
import { carreiraGuides } from './carreira'
import { inclusaoGuides } from './inclusao'

export const guides: Guide[] = [
  ...estudarGuides,
  ...pesquisaIaGuides,
  ...enemGuides,
  ...ensinoSuperiorGuides,
  ...carreiraGuides,
  ...inclusaoGuides,
]
```


## 8. LAYOUT REUTILIZÁVEL OBRIGATÓRIO

Todos os 70 guias devem ser apresentados por **um único layout reutilizável**.

Local:

```text
components/guide/guide-page.tsx
```

Use/analyse este contrato visual-base:

```tsx
import type { Category } from '@/modules/content/domain/category'
import type { Guide } from '@/modules/content/domain/guide'

import { GuideHero } from './guide-hero'
import { GuideToc } from './guide-toc'
import { GuideContent } from './guide-content'
import { GuideChecklist } from './guide-checklist'
import { GuideSources } from './guide-sources'
import { GuideRelated } from './guide-related'

interface GuidePageProps {
  guide: Guide
  category: Category
  relatedGuides: Guide[]
}

export function GuidePage({
  guide,
  category,
  relatedGuides,
}: GuidePageProps) {
  return (
    <div className="guide-page">
      <GuideHero
        guide={guide}
        category={category}
      />

      <div className="guide-layout">
        <GuideContent guide={guide} />
        <GuideToc sections={guide.sections} />
      </div>

      {guide.checklist?.length ? (
        <GuideChecklist items={guide.checklist} />
      ) : null}

      {guide.sources?.length ? (
        <GuideSources sources={guide.sources} />
      ) : null}

      {relatedGuides.length ? (
        <GuideRelated
          guides={relatedGuides}
          category={category}
        />
      ) : null}
    </div>
  )
}

```

Não duplique esse layout em arquivos individuais.
Não crie `page.tsx` para cada guia.
Não coloque conteúdo pedagógico hardcoded dentro do layout.


## 9. COMPONENTE REUTILIZÁVEL DE SEÇÃO

Use/analyse este padrão:

```tsx
import {
  AlertTriangle,
  Lightbulb,
  Quote,
} from 'lucide-react'

import type { GuideSection as GuideSectionType } from '@/modules/content/domain/guide'

export function GuideSection({
  section,
}: {
  section: GuideSectionType
}) {
  return (
    <section
      id={section.id}
      className="guide-section"
    >
      <h2>{section.title}</h2>

      {section.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}

      {section.bullets?.length ? (
        <ul className="guide-bullets">
          {section.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}

      {section.examples?.length ? (
        <div className="guide-callout guide-example">
          <Quote size={20} aria-hidden="true" />
          <div>
            <strong>Exemplo</strong>
            <ul>
              {section.examples.map((example) => (
                <li key={example}>{example}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}

      {section.tips?.length ? (
        <div className="guide-callout guide-tip">
          <Lightbulb size={20} aria-hidden="true" />
          <div>
            <strong>Dica prática</strong>
            <ul>
              {section.tips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}

      {section.warning ? (
        <div className="guide-callout guide-warning">
          <AlertTriangle size={20} aria-hidden="true" />
          <div>
            <strong>Atenção</strong>
            <p>{section.warning}</p>
          </div>
        </div>
      ) : null}

      {section.note ? (
        <aside className="guide-note">
          {section.note}
        </aside>
      ) : null}
    </section>
  )
}

```

Ele deve ser capaz de renderizar os dados dos 70 arquivos por meio de:

- `paragraphs`
- `bullets`
- `tips`
- `examples`
- `warning`
- `note`

Se o projeto já possuir uma implementação equivalente e melhor, preserve-a, desde que mantenha o mesmo princípio de reutilização e compatibilidade com `Guide`.


## 10. COMPONENTES DE GUIDE QUE DEVEM EXISTIR

Garanta a existência e integração desta camada:

```text
components/guide/
├── guide-page.tsx
├── guide-hero.tsx
├── guide-toc.tsx
├── guide-content.tsx
├── guide-section.tsx
├── guide-checklist.tsx
├── guide-sources.tsx
└── guide-related.tsx
```

Responsabilidades:

- `guide-page.tsx`: composição geral.
- `guide-hero.tsx`: breadcrumb, categoria, título, resumo/descrição, tempo de leitura e tags.
- `guide-toc.tsx`: sumário “Neste guia” usando `guide.sections`.
- `guide-content.tsx`: objetivos e sequência de seções.
- `guide-section.tsx`: renderização de texto, listas, dicas, exemplos, notas e alertas.
- `guide-checklist.tsx`: checklist final quando houver.
- `guide-sources.tsx`: fontes e referências.
- `guide-related.tsx`: guias relacionados resolvidos pelo service.

Não criar responsabilidades editoriais dentro desses componentes.


## 11. ROTA DINÂMICA ÚNICA

Todos os guias devem usar somente a rota dinâmica:

```text
app/[categoria]/[slug]/page.tsx
```

O arquivo deve seguir este padrão:

```tsx
import { notFound } from 'next/navigation'

import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { GuidePage } from '@/components/guide/guide-page'

import {
  getCategory,
  getGuideByCategoryAndSlug,
  getRelatedGuides,
} from '@/modules/content/services/content-service'

export default async function Page({
  params,
}: {
  params: Promise<{
    categoria: string
    slug: string
  }>
}) {
  const { categoria, slug } = await params

  const category = getCategory(categoria)
  const guide = getGuideByCategoryAndSlug(categoria, slug)

  if (!category || !guide) {
    notFound()
  }

  const relatedGuides = getRelatedGuides(guide)

  return (
    <>
      <Header />

      <main>
        <GuidePage
          guide={guide}
          category={category}
          relatedGuides={relatedGuides}
        />
      </main>

      <Footer />
    </>
  )
}

```

A rota deve:

- buscar a categoria;
- buscar o guia validando categoria + slug;
- retornar `notFound()` em rota inválida;
- resolver guias relacionados;
- usar `Header` e `Footer` modernos;
- renderizar apenas `GuidePage`;
- não conter conteúdo pedagógico hardcoded.


## 12. CONTENT SERVICE

O `modules/content/services/content-service.ts` deve trabalhar com o novo agregador `../data/guides`.

Garanta pelo menos:

```ts
getGuides()
getGuide(slug)
getGuideByCategoryAndSlug(categorySlug, guideSlug)
getGuidesByCategory(categorySlug)
getFeaturedGuidesByCategory(categorySlug)
getNonFeaturedGuidesByCategory(categorySlug)
getRelatedGuides(guide)
```

Não faça acesso direto aos 70 arquivos a partir dos componentes React.


## 13. CONVERSÃO DO `contexto-pedagogico.md` PARA `Guide`

Para cada um dos 70 blocos do MD, converta semanticamente:

- título do bloco → `title`
- slug informado → `slug`
- categoria → `category`
- objetivo pedagógico → base para `summary`, `description` e/ou `learningObjectives`
- visão geral → `description` e introdução
- subseções → `sections`
- exemplos práticos → `examples` na seção mais adequada ou seção própria
- atividade de fechamento → seção final e/ou `checklist`
- perguntas de autoavaliação → seção final, `bullets` ou checklist conforme o conteúdo
- referências e fontes recomendadas → `sources`
- nota editorial → `warning` ou `note`, quando fizer sentido
- relações temáticas claras entre guias → `relatedGuides`

Não faça uma conversão mecânica que destrua a leitura. Preserve a coerência pedagógica do material.

`readTime` pode ser estimado de modo consistente com o tamanho do conteúdo, sem usar precisão falsa. Use inteiros razoáveis.

`tags` podem ser derivadas estritamente do título e do próprio conteúdo daquele guia.

`learningObjectives` devem refletir o objetivo pedagógico do bloco, sem criar promessas de desempenho.


## 14. REGRAS EDITORIAIS E DE SEGURANÇA DO CONTEÚDO

- Não usar “garante”, “funciona para todos”, “aprenda X% mais” ou equivalentes.
- Não reproduzir mitos como pirâmide de aprendizagem com porcentagens fixas.
- Não tratar “estilos de aprendizagem” como categorias científicas rígidas.
- Pomodoro deve ser tratado como ferramenta de organização do tempo, não garantia de aprendizagem.
- Feynman pode ser apresentado como exercício de autoexplicação, sem alegar percentuais.
- IA deve ser tratada como apoio que pode errar; recomendações importantes precisam de verificação.
- Privacidade: não incentivar envio de senhas, documentos ou dados sensíveis para ferramentas.
- ENEM, Sisu, Prouni, Fies, bolsas e editais: não fixar datas/regras voláteis sem fonte oficial vigente.
- Inclusão: evitar infantilização, estigmatização e “modos” específicos baseados em diagnóstico.
- Acessibilidade deve ser tratada como redução de barreiras para todos.


## 15. NÃO ALTERAR

Durante esta tarefa, não modifique sem necessidade direta:

```text
components/layout/header.tsx
components/layout/footer.tsx
app/page.tsx
app/faq/*
app/sobre/*
app/busca/*
components/home/*
components/category/*
modules/content/data/categories.ts
modules/content/data/faqs.ts
```

Não altere a identidade visual global.
Não refaça a Home.
Não crie backend.
Não crie banco de dados.
Não crie autenticação.


## 16. MIGRAÇÃO E COMPATIBILIDADE

Se existir um antigo arquivo monolítico:

```text
modules/content/data/guides.ts
```

não mantenha duas fontes concorrentes de verdade.

Migre o conteúdo necessário para a nova pasta `guides/` e atualize imports para usar:

```ts
import { guides } from '../data/guides'
```

Antes de apagar qualquer arquivo legado, confirme que não há consumidores restantes.

Se `data/content.ts` ainda funcionar como adaptador legado para outras páginas, não o destrua automaticamente. Faça apenas as alterações mínimas necessárias para preservar a aplicação até a migração completa.


## 17. ORDEM OBRIGATÓRIA DE EXECUÇÃO

Execute nesta ordem:

1. analisar a árvore atual do repositório;
2. ler `modules/content/domain/guide.ts`;
3. ler `modules/content/services/content-service.ts`;
4. ler os componentes existentes em `components/guide/`;
5. ler `app/[categoria]/[slug]/page.tsx`;
6. ler integralmente `contexto-pedagogico.md`;
7. conferir a lista canônica dos 70 guias deste prompt;
8. garantir o contrato `Guide`;
9. garantir o layout reutilizável;
10. garantir a rota dinâmica;
11. criar as seis pastas de categoria;
12. criar os 70 arquivos individuais;
13. criar/atualizar os seis `index.ts`;
14. criar/atualizar `guides/index.ts`;
15. garantir funcionamento do `content-service`;
16. verificar links de `relatedGuides`;
17. verificar duplicidade de slugs;
18. verificar IDs duplicados dentro de cada guia;
19. executar validação TypeScript;
20. corrigir erros relacionados a esta migração;
21. apresentar relatório final.

Não pule diretamente para criação dos arquivos sem ler o material.


## 18. VALIDAÇÕES OBRIGATÓRIAS

Execute:

```bash
pnpm exec tsc --noEmit
```

Se houver script de lint já configurado no projeto, execute-o também.

Faça validação lógica:

- exatamente 70 guias;
- nenhum slug duplicado;
- cada slug corresponde ao arquivo;
- cada `category` corresponde à pasta;
- cada export é único;
- cada `relatedGuides` aponta para slug existente ou é omitido;
- nenhum arquivo editorial contém JSX;
- nenhuma página individual foi criada;
- todos os guias são alcançáveis pela rota dinâmica;
- nenhum conteúdo pedagógico ficou hardcoded no `GuidePage`;
- todos os objetos usam `satisfies Guide`.


## 19. CRITÉRIOS DE ACEITE

A tarefa só está concluída quando:

- existirem exatamente 70 arquivos de guia;
- os 70 títulos da lista canônica estiverem representados;
- cada guia estiver isolado em seu próprio arquivo;
- as seis categorias possuírem seus índices;
- `guides/index.ts` agregar tudo;
- `content-service` acessar o agregador;
- a rota dinâmica usar `GuidePage`;
- o layout for único e reutilizável;
- `contexto-pedagogico.md` tiver sido respeitado como base editorial;
- TypeScript estiver sem erros causados pela migração.


## 20. ENTREGA FINAL DA IA

Ao terminar, responda com um relatório contendo:

1. quantidade total de guias criados;
2. quantidade por categoria;
3. lista das pastas criadas;
4. lista dos arquivos de arquitetura alterados;
5. confirmação de que todos os 70 identificadores foram encontrados;
6. slugs duplicados encontrados, se houver;
7. `relatedGuides` inválidos encontrados, se houver;
8. resultado de `pnpm exec tsc --noEmit`;
9. resultado do lint, se executado;
10. quaisquer limitações ou pontos que exigem revisão humana.

Não faça commit.
Não faça push.
