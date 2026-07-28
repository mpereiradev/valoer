import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";

const OLD = [
  "Fila de banco e papelada",
  "Uma única operadora, sem comparação",
  "Taxas escondidas nas entrelinhas",
  "Semanas esperando uma resposta",
];

const VALOER = [
  "Tudo online, no seu tempo",
  "Várias operadoras comparadas por perfil",
  "Custos claros antes de assinar",
  "Simulação na hora, contratação em minutos",
];

export function WhyValoer() {
  return (
    <section id="diferenciais" className="bg-white pb-section-sm lg:pb-section">
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-impulse-600">Por que a Valoer</p>
          <h2 className="mt-3 text-3xl lg:text-4xl">
            O modelo antigo é caro e lento. O nosso, não.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-lg border border-line bg-cloud p-8">
              <h3 className="text-lg text-slate">Do jeito tradicional</h3>
              <ul className="mt-6 space-y-4">
                {OLD.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate">
                    <svg viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0 text-slate/60" fill="none">
                      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M7 7l6 6M13 7l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    <span className="line-through decoration-slate/30">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="h-full rounded-lg bg-navy-800 p-8 text-white">
              <h3 className="font-display text-lg font-semibold text-impulse-400">Com a Valoer</h3>
              <ul className="mt-6 space-y-4">
                {VALOER.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0 text-impulse-500" fill="none">
                      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M6.5 10.5 9 13l4.5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
