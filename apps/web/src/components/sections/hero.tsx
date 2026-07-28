import { Container } from "@/components/container";
import { ButtonLink } from "@/components/button";
import { SpeedLines } from "@/components/speed-lines";
import { Simulator } from "@/components/sections/simulator";

const HIGHLIGHTS = [
  "Sem burocracia",
  "Várias opções para o seu perfil",
  "100% online",
];

export function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden bg-navy-800 pb-20 pt-32 text-white lg:pb-28 lg:pt-40"
    >
      <SpeedLines className="absolute -right-24 top-0 h-full w-[70%] text-impulse-500" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-navy-900/40" />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6 xl:col-span-5">
            <p className="inline-flex items-center gap-2 rounded-pill border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-impulse-400">
              Consórcio e Seguro
            </p>

            <h1 className="display-hero mt-6 text-4xl font-bold leading-[1.05] text-white lg:text-5xl">
              O seu próximo passo financeiro, sem a burocracia de sempre.
            </h1>

            <p className="mt-6 max-w-md text-lg leading-relaxed text-white/75">
              Compare consórcios e seguros de várias operadoras em um só lugar e simule
              a melhor opção para o seu perfil em minutos.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#simulador" surface="dark" variant="primary">
                Simular agora
              </ButtonLink>
              <ButtonLink href="#como-funciona" surface="dark" variant="secondary">
                Como funciona
              </ButtonLink>
            </div>

            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/70">
              {HIGHLIGHTS.map((h) => (
                <li key={h} className="flex items-center gap-2">
                  <svg viewBox="0 0 20 20" className="h-4 w-4 shrink-0 text-impulse-500" fill="none">
                    <path d="M4 10.5 8 14.5 16 5.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 xl:col-span-6 xl:col-start-7">
            <Simulator />
          </div>
        </div>
      </Container>
    </section>
  );
}
