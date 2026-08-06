# AGENTS.md

Orienta agentes neste repositório. Não invente arquivos, comandos, serviços ou requisitos ausentes.

## Produto e estrutura

- **Meeting Cost CLI**: estima custo de mão de obra de uma reunião via CLI (participantes, duração em minutos, custo por hora). Sem API, UI, persistência ou integrações.
- Fórmula: `participants * (durationMinutes / 60) * hourlyCost`
- Exemplo: `npm start -- 5 30 100` → `250.00`
- Arquivos reais: `package.json`, `src/meeting-cost.js` (`calculateMeetingCost` pura), `src/cli.js` (I/O), `PROJETO.md`, `README.md`, `LICENSE`, `AGENTS.md`
- Preserve domínio em `src/meeting-cost.js` e I/O em `src/cli.js`
- Ausentes hoje: testes, linter, formatter, typecheck, CI, hooks, rules, skills, workflows, `.gitignore`, MCP, `package-lock.json`

## Comandos, domínio, dependências e segurança

- Único script: `npm start -- <participantes> <duração-minutos> <custo-por-hora>` (executa `node src/cli.js`). Não invente `test`/`lint`/`build` etc.
- Invariantes (`src/meeting-cost.js`): números finitos; `participants >= 1`; `durationMinutes > 0`; `hourlyCost >= 0` (zero ok); domínio puro (sem `process.argv`, stdout ou `exit`); lança `Error` com mensagem acionável em português
- CLI: exige exatamente 3 args; uso inválido ou erro de domínio → `console.error` e exit `1`; sucesso → `console.log` com custo em 2 casas decimais
- Código em `src/meeting-cost.js` prevalece sobre docs em conflito
- ESM: `"type": "module"`, `import`/`export` com extensão `.js`, Node `>=24`, só APIs nativas; sem `require`, deps, `npm install` ou lockfile sem pedido explícito
- Segurança: só argv → stdout/stderr; sem rede, telemetria, segredos, FS arbitrário ou comandos destrutivos sem pedido; valide entradas antes de calcular
- Sem pedido explícito: não altere `README.md`/`LICENSE`; não adicione harness/CI/testes; não faça commit/tag/PR; não expanda o produto

## Conclusão

- [ ] Produto permanece Meeting Cost CLI
- [ ] Separação domínio/CLI preservada
- [ ] Só `npm start` assumido (salvo novos scripts pedidos)
- [ ] Invariantes e fórmula intactas
- [ ] ESM nativo, sem deps não pedidas
- [ ] Inválido → erro acionável + exit `1`; válido → resultado claro
- [ ] Limites de segurança e proibições respeitados
- [ ] Se a CLI mudou, valide com `npm start -- 5 30 100`
