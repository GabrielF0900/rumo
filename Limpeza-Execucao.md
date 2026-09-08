# Limpeza — execução controlada

## Estado inicial

- Data de início: 08/09/2026.
- Branch: `feat/plataforma-interna-v1`.
- HEAD: `46ea8eabbc548ba506c5729e60ce4ebd4a8af800`.
- Alteração preexistente: `?? Limpeza.md`, preservado integralmente.
- Node 22.22.0; pnpm 10.24.0; Windows/PowerShell. Usado `pnpm.cmd` para não alterar ExecutionPolicy.
- Relatório obrigatório lido integralmente; achados reconfirmados nas fontes antes das mudanças.
- Baseline: `pnpm.cmd exec tsc --noEmit --incremental false` e `pnpm.cmd build` passaram. Build inicial ignora tipos. Não existem testes/lint configurados.

## Alterações planejadas

1. Migrar busca para layout moderno e catálogo leve, preservando filtros/estados/URLs; validar antes de retirar shell/adaptador.
2. Remover apenas código sem consumidor confirmado; preservar cn e configuração útil do gerador.
3. Mover seis documentos para docs sem reescrever história; criar README.
4. Preservar todas as URLs públicas incertas, conferir assets/DOCX e otimizar entrega de imagens sem substituir originais.
5. Separar CSS em blocos mantendo ordem, remover resíduos comprovados após migração e comparar telas.
6. Compartilhar preferências, corrigir foco/IDs/sumário/skip link e movimento manual.
7. Fazer loading acompanhar o ciclo real do framework, sem bloquear conteúdo pronto com timers.
8. Criar testes persistentes do catálogo e serviços sem reescrever guias.
9. Reconsultar audit; corrigir grupos compatíveis mínimos e registrar remanescentes.
10. Ativar tipos no build, lint real e scripts de validação; proteger arquivos locais/ambiente.
11. Reproduzir 404, usar recursos nativos Next e adicionar metadados sem inventar domínio público.
12. Validar interface/rotas/fontes/performance e registrar limitações reais.

## Preservação e limites

Sem commit, push, merge, PR ou checkout de master. Nenhum documento histórico ou asset público será excluído quando houver dúvida de contrato externo. Sem backend, alterações de slugs ou reescrita pedagógica. Artefatos diagnósticos locais serão guardados em `.validation/`, não em public.

## Resultados

### Retomada e diagnóstico do commit anterior

Retomada em 08/09/2026 na mesma branch `feat/plataforma-interna-v1`, com HEAD em `84575b058cb2e67e340478767cf377f613a027ea` e árvore de trabalho inicialmente limpa. O título desse commit dizia “concluir”, mas o código e este relatório demonstravam execução parcial. Nenhuma alteração existente foi descartada.

`Limpeza.md` e este documento foram lidos integralmente. Foram inventariados os 164 arquivos versionados, lidos seus bytes e analisados sintaticamente os 133 arquivos TypeScript/TSX. A revisão de arquitetura não representa nova revisão editorial frase a frase dos documentos e dos 70 guias. Artefatos antigos em `.validation/` foram preservados; a retomada usa novos arquivos de evidência.

| Frente | Estado encontrado no HEAD | Resultado desta retomada |
| --- | --- | --- |
| Busca | Migrada para componentes modernos e catálogo leve; shell/adaptador ainda presentes sem consumidores | Testes do catálogo e filtro; retirada do shell/adaptador; correção do CSS de títulos `h2`; 70 links conferidos |
| Código sem uso | Button, dois desenhos SVG e splash antigo ainda presentes | Retirados; Wordmark, `cn` e configuração do gerador preservados |
| Documentação | Seis documentos ainda na raiz; sem README | Movidos para `docs/`; README com arquitetura e comandos; links da auditoria ajustados |
| Imagens e assets | Otimizador Next já reativado; dimensões/sizes incompletos | Dimensões reais e sizes em Home, Estudar e Sobre; entrega otimizada medida; todas as URLs públicas originais preservadas |
| CSS | Monólito de 3.789 linhas; estilos legados | Oito arquivos em `styles/`; 103 seletores comprovadamente sem consumidores e estilos do splash retirados; cascata conferida por AST |
| Acessibilidade | Provider compartilhado, IDs únicos, Escape no painel, sumário inert e scroll manual já implementados; skip link incompleto | Destino em todas as páginas, estilo de foco do skip link e da busca; Escape no menu; fechamento em mudança de breakpoint; ajustes de movimento manual |
| Loading | Splash já fora do layout, mas arquivo ainda existia; fallback sumia em 2 s | Arquivo órfão retirado; fallback sem estado/timer client, desmontado pelo Next quando o conteúdo chega |
| Conteúdo | Mensagem de destaques vazios e prop FAQ corrigidas; sem testes persistentes | Cinco testes persistentes abrangendo catálogo, arquivos, contratos, seções, fontes, relações, destaques e busca |
| Dependências | Mesmos pacotes legados e 37 ocorrências de audit | Quatro dependências sem uso removidas; quatro correções pontuais; audit final sem ocorrências |
| Qualidade/configuração | Tipos bloqueantes e ignore de ambientes já corrigidos; sem lint/scripts | ESLint real, scripts de tipos/testes/validação/HTTP e configuração isolada para testes |
| Metadados/404 | Só busca tinha metadados específicos; inválidos ainda retornavam 200 com noindex | Metadados de FAQ, Sobre, categorias e guias; `dynamicParams = false`; página 404 com recuperação; quatro negativos retornaram HTTP 404 |
| Validação final | Sem resultado consolidado | Tipos, lint, testes, build, rotas, assets, fontes, hashes e lockfile validados; limites abaixo |

### Mudanças e preservação

- Removidos `components/rumo-shell.tsx`, `data/content.ts`, `components/ui/button.tsx` e `components/loading/initial-loading-screen.tsx`. Removidos somente `RumoIcon`, `RumoBrandArt` e a prop exclusiva desses desenhos em `rumo-brand.tsx`. `RumoWordmark` continua ativo.
- `lib/utils.ts`, `clsx`, `tailwind-merge` e `components.json` foram mantidos conforme o plano inicial. A CLI shadcn deixou de ser dependência instalada. Novos componentes gerados no futuro devem trazer apenas as dependências e estilos que utilizarem.
- Documentos em `docs/arquitetura/`, `docs/extensao/`, `docs/pedagogico/` e `docs/desenvolvimento/`. Cinco foram movidos byte a byte. Na auditoria histórica, somente destinos de links foram ajustados: caminhos atuais usam `../../`; arquivos removidos apontam para sua versão no commit `84575b0`.
- `Limpeza.md` permanece intacto como fotografia histórica. Seus estados “não executado” não descrevem a situação atual; este documento é o registro da execução.
- SHA-256 confirmou preservação de 94 arquivos: dados editoriais/categorias/índices/FAQ, todos os 14 arquivos públicos e `Limpeza.md`. Slugs, textos, relações e download não foram reescritos.
- Nenhum backend, nova camada vazia, domínio público fictício, commit, push, merge ou PR foi criado. Não houve troca ou alteração de `master`.

### CSS e acessibilidade

`app/globals.css` contém a ordem explícita dos imports: `base-and-search`, `home-and-layout`, `category`, `guide`, `actions`, `about`, `loading` e `accessibility`. O agrupamento de Home/layout conserva as media queries compartilhadas e suas sobreposições; elas não foram reordenadas por preferência estética.

A verificação comparou **2.140 declarações mantidas**, incluindo contexto de seletores/media queries, valores, `!important` e ordem. Todas coincidiram com o baseline após descontar remoções documentadas e a correção intencional de `.guide-card h3` para `h2`. Novas regras de acessibilidade estão no último import. CSS próprio antes: 91.031 bytes; blocos extraídos antes das novas regras: 77.196 bytes. Não se afirma equivalência visual validada em navegador.

O provider único e o `inert` do sumário vieram do commit anterior e foram preservados. Foram completados os destinos do skip link, o foco visível da busca, a prioridade de foco no cabeçalho/rodapé e a redução manual de movimento no elemento `html`. Painéis fecham ao cruzar o breakpoint e tentam transferir foco para um controle visível; o menu móvel fecha com Escape e ao entrar no layout desktop.

### Dependências e auditoria

Removidos `@base-ui/react`, `class-variance-authority`, `shadcn` e `tw-animate-css`, após conferir imports e classes/variantes utilizadas. Os imports CSS correspondentes também foram retirados. Instalados ESLint e `eslint-config-next` alinhado ao Next 16.3.3 existente, sem atualização do framework.

Overrides limitados à versão principal em `pnpm-workspace.yaml`: PostCSS 8.5.23, nanoid 3.3.18, browserslist 4.28.7 e brace-expansion 5.0.9. As faixas atingem somente versões anteriores vulneráveis dessas mesmas linhas, sem forçar brace-expansion 1.x para 5.x.

Auditoria real: **37 ocorrências inicialmente → 14 após remoções/instalação do lint → 0 após correções**. Evidências: `.validation/audit-after-removals.json` e `.validation/audit-final.json`. Zero ocorrências no registro consultado não é certificação geral de segurança.

O registro sinalizou ESLint 9.39.5 como descontinuado. Essa linha foi mantida porque `eslint-plugin-react` 7.37.5, usado pela configuração do Next, declara compatibilidade até ESLint 9, não 10. Atualização futura deve tratar o conjunto de plugins. O pnpm informou scripts de instalação de `unrs-resolver` ignorados; não foi necessário liberá-los para o lint passar. A instalação congelada final com `--ignore-scripts` passou.

### Validações realizadas

| Verificação | Resultado real |
| --- | --- |
| Baseline da retomada: tsc e build | Passaram antes das mudanças; build já verificava tipos |
| `pnpm.cmd typecheck` | Passou |
| `pnpm.cmd lint` | Passou com `--max-warnings 0` |
| `pnpm.cmd test` | Cinco testes, cinco aprovações; 70 guias nas seis categorias |
| `pnpm.cmd build` | Passou com tipos bloqueantes e 82 entradas estáticas |
| `pnpm.cmd test:routes` | 80 páginas válidas, 81 hrefs internos distintos, âncoras locais e IDs sem falhas |
| Rotas inválidas | Categoria inexistente, guia inexistente, categoria incompatível e caminho extra: HTTP 404 + noindex + página de recuperação |
| Busca | Todos os 70 links; filtro por título, resumo, tags e categoria; caixa/espaços/zero resultados preservados |
| CSS e mídia no servidor | Um stylesheet e três imagens referenciadas: HTTP 200 |
| DOCX | Bytes baixados iguais ao arquivo público original |
| Fontes | Cinco recursos WOFF2 locais declarados no CSS responderam HTTP 200 |
| Imagens otimizadas | Seis combinações de imagem/largura responderam HTTP 200 como WebP |
| Preservação | Hashes de dados/assets/relatório e dos cinco documentos movidos coincidiram |
| `pnpm.cmd install --frozen-lockfile --ignore-scripts` | Passou; lockfile atualizado e nenhuma resolução necessária |
| `git diff --check` | Passou |
| `pnpm.cmd validate` final | Pipeline completo passou após a última alteração de código |
| Imports e documentação | 130 fontes analisadas, imports locais válidos, nenhum ciclo e 102 links documentais locais válidos |

O teste HTTP detectou inicialmente um ID repetido entre fallback de loading e conteúdo no HTML de streaming. O ID foi retirado do fallback, e a suíte passou novamente. Tentativas de instalação/audit no sandbox tiveram restrições de acesso; os comandos de rede foram repetidos com a aprovação exigida pelo ambiente. Uma execução transitória de lint não encontrou o executável durante a sincronização das dependências; a execução final completa passou.

Medições locais de bytes, sem compressão HTTP: JavaScript referenciado pela busca **589.543 → 589.415 bytes** nesta retomada. O ganho maior da migração já estava no commit anterior e não é atribuído a esta etapa. CSS compilado final: 71.055 bytes. Com Accept WebP, logo Home a 640 px: 38.436 bytes versus original de 608.853; imagem Estudar a 640 px: 13.176 versus 1.058.735; logo de Sobre a 640 px: 41.132 versus 655.391. São medições de entrega, não resultados de Core Web Vitals ou avaliação visual de qualidade.

Evidências adicionais: `.validation/resumed-hashes.json`, `resumed-http-before.json`, `css-removed-selectors.json`, `css-order-check.json`, `routes-after.json` e `assets-delivery.json`. Artefatos de validação continuam ignorados pelo Git.

### Limites e pendências externas

- Por orientação do usuário na retomada, não foi continuada a validação em navegador. Responsividade visual, interação real por teclado, foco após resize, leitor de tela, contraste WCAG e rede lenta não foram certificados; lint/HTTP/análise de fonte não substituem essas verificações.
- Preservados assets sem referência local, inclusive `explorar.png`, placeholders e ícones, porque contratos externos não foram confirmados. O favicon continua usando `/logo-pequena.png`; gerar um favicon dedicado menor permanece uma otimização específica pendente.
- Disponibilidade/atualidade de todas as fontes editoriais externas, revisão do DOCX em Word/LibreOffice e configuração remota de Analytics/deploy não foram avaliadas nesta limpeza.
- Comportamento HTTP foi comprovado no servidor local de produção. Deve ser reconfirmado no ambiente publicado quando a publicação for autorizada.
- O Next 16.3.3 registrou `Internal: NoFallbackError` no terminal ao receber os três negativos de rotas dinâmicas, embora todos tenham retornado corretamente 404, noindex e a página de recuperação. Permanece uma limitação de diagnóstico do framework; não foi ocultada nem contornada com proxy ou atualização ampla. A configuração segue o contrato nativo de [generateStaticParams/dynamicParams](https://nextjs.org/docs/app/api-reference/functions/generate-static-params).
- Publicação não realizada. Alterações permanecem locais na branch de trabalho, aguardando autorização explícita do usuário para qualquer commit ou publicação.

O lint utiliza a [configuração oficial de ESLint do Next](https://nextjs.org/docs/app/api-reference/config/eslint). Servidores locais de validação foram encerrados ao terminar. Nenhuma interação com navegador foi retomada após a orientação do usuário.

### Ajuste posterior — tela de entrada restaurada

Por solicitação explícita do usuário, a tela inicial foi restaurada ao comportamento anterior à limpeza: logo animado e barra de progresso durante 1.900 ms, seguidos de transição de saída de 350 ms, com remoção aos 2.250 ms após a montagem. O componente `InitialLoadingScreen` e seu CSS foram recuperados do commit `46ea8ea` e reintegrados ao layout global, mantendo os estilos em `styles/loading.css`. A tela aparece na entrada/recarregamento da plataforma. Esta decisão substitui a remoção do splash registrada acima; o fallback de navegação continua vinculado ao ciclo do Next. TypeScript e lint foram executados para validar o ajuste. A alteração preexistente de `next-env.d.ts` foi preservada.
