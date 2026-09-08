# Rumo

Plataforma de orientação estudantil com 70 guias em seis categorias, construída com Next.js App Router, React e TypeScript. Os dados são locais; não há cadastro nem backend próprio.

## Desenvolvimento e validação

Ambiente validado: Node 22 e pnpm 10. No PowerShell, use `pnpm.cmd` se a política de execução bloquear `pnpm.ps1`.

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm validate
```

`validate` executa tipos, ESLint, testes de conteúdo e build. O build precisa acessar Google Fonts para obter Geist. Os testes compilam somente o módulo de conteúdo em `.validation/content-tests/` e usam o runner nativo do Node.

Para verificar HTTP, metadados, links, âncoras, imagens, busca e download, mantenha o servidor de produção em outro terminal:

```sh
pnpm start --port 3100
pnpm test:routes
```

## Organização

- `app/`: rotas, metadados, layout global e fallbacks do Next.js.
- `components/`: apresentação por responsabilidade; busca recebe apenas um catálogo leve.
- `modules/content/domain/`: contratos de categorias, guias, FAQ e busca.
- `modules/content/data/`: 70 guias individuais, índices, categorias e FAQ.
- `modules/content/services/`: consultas locais e filtragem de busca.
- `styles/`: estilos importados por `app/globals.css` na ordem explícita da cascata. Não reagrupar media queries sem verificar precedência.
- `tests/` e `scripts/`: verificações persistentes de conteúdo e rotas.
- `public/`: imagens e modelo DOCX; URLs preexistentes preservadas.
- `.validation/`: artefatos locais ignorados pelo Git.

O domínio e os serviços não dependem de React. Guias novos precisam entrar no índice de sua categoria; as rotas estáticas exigem novo build. `components.json` e `lib/utils.ts` permanecem como configuração/utilitário para eventual geração de UI; a CLI shadcn não é dependência instalada e seus estilos não são exigidos pela interface atual.

## Documentação

- [Mapeamento histórico da limpeza](Limpeza.md)
- [Execução e resultados atuais](Limpeza-Execucao.md)
- [Auditoria arquitetural histórica](docs/arquitetura/ARCHITECTURE_AUDIT.md)
- [Origem e extensão universitária](docs/extensao/SobreMim.md)
- [Contexto pedagógico](docs/pedagogico/contexto-pedagogico.md)
- [Pesquisa dos 70 guias](docs/pedagogico/contexto-pedagogico-pesquisa-alto-nivel-70-guias.md)
- [Exemplos e aprofundamento de carreira](docs/pedagogico/complemento-pedagogico-exemplos-estrategicos-carreira-ats.md)
- [Especificação histórica de povoamento](docs/desenvolvimento/prompt-mestre-povoamento-70-guias-rumo.md)

Documentos históricos descrevem o estado de sua época. Os links da auditoria para arquivos removidos apontam para o commit que ainda os contém; caminhos citados em exemplos históricos não são instruções atuais.
