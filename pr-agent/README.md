# PR Agent

Agente local para análise e revisão de Pull Requests com base em contexto, diff, métricas de qualidade e decisão assistida.

## Estrutura

- `PRContextAnalyzer`: coleta contexto da PR.
- `DiffAnalyzer`: analisa o diff entre branch base e branch head.
- `QualityMetricsChecker`: estima métricas e sinais de qualidade.
- `DecisionMaker`: consolida o resultado e decide a ação.
- `gitTools`: comandos Git.
- `repoApi`: abstração para GitHub/GitLab.
- `testRunner`: execução de testes automatizados.
- `llmClient`: integração com LLM.

## Requisitos

- Node.js
- Git
- TypeScript

## Instalação

```bash
npm install
```

## Execução

Defina a PR:

```bash
PR_ID=123 npm run dev
```

## Regras iniciais

- Limite de linhas modificadas: 400.
- Limite de arquivos alterados: 10.
- A PR deve ser revisada por contexto, diff, complexidade e possíveis smells.

## Próximos passos

- Integrar GitHub/GitLab de verdade.
- Conectar um provedor de LLM.
- Melhorar a análise de sintaxe e complexidade com ferramentas reais.
- Adicionar comentários inline na PR.