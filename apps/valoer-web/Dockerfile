# ── Stage 1: build ─────────────────────────────────────────────────
FROM node:22-alpine AS build
RUN npm i -g pnpm@11
WORKDIR /app

ARG NEXT_PUBLIC_API_URL
ARG NEXT_PUBLIC_SUPABASE_URL
ARG NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY

ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_SUPABASE_URL=$NEXT_PUBLIC_SUPABASE_URL
ENV NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=$NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY

COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY apps/valoer-web ./apps/valoer-web

RUN pnpm install --frozen-lockfile
RUN pnpm --filter valoer-web build

# ── Stage 2: production runtime ───────────────────────────────────
FROM node:22-alpine AS runtime
RUN apk add --no-cache dumb-init
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

COPY --from=build /app/apps/valoer-web/.next/standalone ./
COPY --from=build /app/apps/valoer-web/.next/static ./apps/valoer-web/.next/static
COPY --from=build /app/apps/valoer-web/public ./apps/valoer-web/public

EXPOSE 3000
USER node
CMD ["dumb-init", "node", "apps/valoer-web/server.js"]