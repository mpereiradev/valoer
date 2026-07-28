# valoer-api — API (Fastify)

Camada de API da Valoer (Seção 7 da constituição DevMove). Estrutura **base** — as rotas
de negócio (consórcio, seguro, leads, integrações com operadoras) entram por cima daqui.

## Stack
- **Fastify 5** (ESM + TypeScript)
- `@fastify/cors`, `@fastify/sensible`
- `tsx` para dev com watch · `tsc` para o build de produção
- Logger `pino` (com `pino-pretty` em dev)

## Estrutura
```
src/
├─ server.ts  → bootstrap (listen)
├─ app.ts     → instância Fastify: plugins + rotas
└─ env.ts     → leitura de process.env
```

## Comandos (a partir da raiz do monorepo)
```bash
pnpm dev:api     # dev com watch (porta 3333)
pnpm --filter valoer-api build   # compila para dist/
pnpm --filter valoer-api start   # roda o build (node dist/server.js)
```

Rotas base: `GET /health` e `GET /`.

## Próximos passos (quando o backoffice entrar)
- **PostgreSQL** (Supabase/instância gerenciada) + **Prisma**
- **Auth** com RBAC (admin / editor / viewer)
- Módulos por domínio (consórcio, seguro, leads) e validação de schema
