# @valoer/admin — painel administrativo (reservado)

Painel de administração da Valoer (Seção 7 da constituição DevMove). **Ainda não
implementado** — o escopo atual é apenas o site institucional (`apps/web`).

## Quando implementar
Quando o cliente precisar gerenciar conteúdo, leads/simulações, produtos e apólices
após o lançamento.

## Stack alvo (defaults DevMove)
- **React + Vite** (ou rota `/admin`) com **shadcn/ui**
- Consome `@valoer/api`
- Login do cliente com RBAC (admin / editor / viewer)
- Reutiliza `@valoer/design-tokens` para manter a identidade visual
