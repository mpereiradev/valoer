# Valoer Open Banking — Monorepo

Monorepo pnpm da Valoer. Stack: Next.js 16 (App Router), React 19, Tailwind 3, Framer Motion.

## Estrutura

```
valoer/
├─ apps/
│  ├─ web/     → @valoer/web   — site institucional (Next.js) ✅ ativo
│  ├─ api/     → camada de API (reservada, ver README)
│  └─ admin/   → painel admin  (reservado, ver README)
├─ packages/
│  ├─ design-tokens/ → @valoer/design-tokens (tokens + preset Tailwind)
│  └─ tsconfig/      → @valoer/tsconfig (configs TS compartilhadas)
├─ docs/       → DESIGN-TOKENS.md, DESIGN-SYSTEM.md (+ specs futuras)
└─ references/ → logo e referências visuais do cliente
```

## Comandos (a partir da raiz)

```bash
pnpm install          # instala todo o workspace
pnpm dev              # dev do site (@valoer/web)
pnpm build            # build de produção do site
pnpm --filter @valoer/web <script>   # roda script de uma app específica
```

## Deploy na Vercel (apenas o site `apps/web`)

O projeto na Vercel aponta para **uma app do monorepo** via **Root Directory**.

**Pelo dashboard (recomendado):**
1. Import Project → selecione este repositório.
2. Em **Root Directory**, clique em *Edit* e escolha **`apps/web`**.
3. Framework: **Next.js** (detectado automaticamente).
4. Build Command / Install Command / Output: **deixe no padrão** — a Vercel detecta o
   `pnpm-workspace.yaml` na raiz e instala o workspace inteiro a partir dela, resolvendo
   `@valoer/design-tokens` e `@valoer/tsconfig`.
5. O `packageManager: "pnpm@9.15.9"` (raiz) faz a Vercel usar o pnpm correto via corepack.

> Só isso já garante que **apenas `apps/web` é publicado**. As pastas `api/` e `admin/`
> ficam no repositório mas não entram no build enquanto não forem outros projetos Vercel.

**Otimização opcional — build só quando `web` muda:** em Project → Settings → Git,
em *Ignored Build Step*, use:
```bash
npx turbo-ignore @valoer/web
```
ou um check simples de caminho, para não rebuildar o site quando só `api/`/`admin` mudarem.

**Pela CLI (alternativa):**
```bash
cd apps/web
vercel        # primeira vez: vincula o projeto
vercel --prod # deploy de produção
```
A Vercel sobe pela raiz do repo automaticamente por causa do workspace.

## Design system
Fonte de verdade dos tokens: `packages/design-tokens/src/tokens.js` (espelha `docs/DESIGN-TOKENS.md`).
Alterou um token → reflete em todo o site via preset Tailwind.
