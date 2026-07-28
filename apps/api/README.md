# @valoer/api — camada de API (reservada)

Camada de API da Valoer (Seção 7 da constituição DevMove). **Ainda não implementada** —
o escopo atual é apenas o site institucional (`apps/web`).

## Quando implementar
Quando o projeto incluir backoffice/CMS, gestão de leads, ou a simulação passar a
consultar operadoras reais e persistir dados.

## Stack alvo (defaults DevMove)
- **NestJS** (ou Route Handlers do Next para escopo menor) — REST ou tRPC
- **PostgreSQL** (Supabase/instância gerenciada) + **Prisma**
- **Auth.js/Clerk** com RBAC (admin / editor / viewer) desde o dia 1
- Validação, regras de negócio e integração com operadoras de consórcio/seguro

Modelar conteúdo como dado estruturado (CMS-style) para o cliente editar sem desenvolvedor.
