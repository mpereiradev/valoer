# Valoer Open Banking — Monorepo

Monorepo pnpm da Valoer. Stack: Next.js 16 (App Router), React 19, Tailwind 3, Framer Motion.

## Estrutura

```
valoer/
├─ apps/
│  ├─ valoer-web/   → site institucional (Next.js 16, Tailwind 4) — porta 3000
│  ├─ valoer-admin/ → painel admin (Next.js 16, Tailwind 4, base)  — porta 3001
│  └─ valoer-api/   → API (Fastify 5, TypeScript, base)            — porta 3333
├─ packages/
│  ├─ design-tokens/ → @valoer/design-tokens (tokens + preset Tailwind)
│  └─ tsconfig/      → @valoer/tsconfig (configs TS compartilhadas)
├─ docs/       → DESIGN-TOKENS.md, DESIGN-SYSTEM.md (+ specs futuras)
└─ references/ → logo e referências visuais do cliente
```

## Comandos (a partir da raiz)

```bash
pnpm install          # instala todo o workspace
pnpm dev:web          # dev do site (valoer-web)  — porta 3000
pnpm dev:admin        # dev do painel admin       — porta 3001
pnpm dev:api          # dev da API (Fastify)       — porta 3333
pnpm build            # build de todas as apps (apps/*)
pnpm build:web        # build só do site
pnpm --filter valoer-web <script>    # roda script de uma app específica
```

> Os comandos de `dev` **sempre** exigem o sufixo da app (`dev:web`/`dev:admin`/`dev:api`) —
> não há `dev` default, para evitar rodar a app errada.

## Deploy na Vercel (apenas o site `apps/web`)

O projeto na Vercel aponta para **uma app do monorepo** via **Root Directory**.

**Pelo dashboard (recomendado):**
1. Import Project → selecione este repositório.
2. Em **Root Directory**, clique em *Edit* e escolha **`apps/valoer-web`**.
3. Framework: **Next.js** (detectado automaticamente).
4. Build Command / Install Command / Output: **deixe no padrão** — a Vercel detecta o
   `pnpm-workspace.yaml` na raiz e instala o workspace inteiro a partir dela, resolvendo
   `@valoer/design-tokens` e `@valoer/tsconfig`.
5. O `packageManager: "pnpm@9.15.9"` (raiz) faz a Vercel usar o pnpm correto via corepack.

> Só isso já garante que **apenas `apps/valoer-web` é publicado**. As pastas `valoer-api/` e
> `valoer-admin/` ficam no repositório mas não entram no build enquanto não forem outros projetos Vercel.

**Otimização opcional — build só quando `web` muda:** em Project → Settings → Git,
em *Ignored Build Step*, use:
```bash
npx turbo-ignore @valoer/web
```
ou um check simples de caminho, para não rebuildar o site quando só `valoer-api`/`valoer-admin` mudarem.

**Pela CLI (alternativa):**
```bash
cd apps/valoer-web
vercel        # primeira vez: vincula o projeto
vercel --prod # deploy de produção
```
A Vercel sobe pela raiz do repo automaticamente por causa do workspace.

## Design system
Fonte de verdade dos tokens: **`packages/design-tokens/src/theme.css`** (`@theme` do Tailwind v4),
espelhando `src/tokens.js` e `docs/DESIGN-TOKENS.md`. As apps importam com
`@import "@valoer/design-tokens/theme.css";` após `@import "tailwindcss";`.
Alterou um token → reflete em toda app que importa o `theme.css`.
