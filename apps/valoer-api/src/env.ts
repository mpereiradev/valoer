// Configuração de ambiente da API. Centraliza a leitura de process.env.
export const env = {
  port: Number(process.env.PORT ?? 3333),
  host: process.env.HOST ?? "0.0.0.0",
  nodeEnv: process.env.NODE_ENV ?? "development",
  get isDev() {
    return this.nodeEnv !== "production";
  },
};
