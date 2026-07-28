import Fastify, { type FastifyInstance } from "fastify";
import cors from "@fastify/cors";
import sensible from "@fastify/sensible";
import { env } from "./env.js";

/**
 * Monta a instância Fastify com plugins e rotas base.
 * Estrutura reservada — as rotas de negócio (consórcio, seguro, leads) entram aqui.
 */
export async function buildApp(): Promise<FastifyInstance> {
  const app = Fastify({
    logger: env.isDev
      ? { transport: { target: "pino-pretty" } }
      : true,
  });

  await app.register(cors, { origin: true });
  await app.register(sensible);

  // Healthcheck (usado por Vercel/Render/monitoramento)
  app.get("/health", async () => ({
    status: "ok",
    service: "valoer-api",
    uptime: process.uptime(),
  }));

  // Raiz — identifica o serviço
  app.get("/", async () => ({
    name: "valoer-api",
    version: "0.1.0",
    docs: "reservado",
  }));

  return app;
}
