import { Container } from "@/components/container";
import { SpeedLines } from "@/components/speed-lines";

const STATS = [
  { value: "+12", suffix: "operadoras", label: "comparadas em um só lugar" },
  { value: "1 min", suffix: "", label: "para a sua primeira simulação" },
  { value: "100%", suffix: "online", label: "da simulação ao contrato" },
  { value: "0", suffix: "juros", label: "no consórcio, só taxa de administração" },
];

export function TrustBand() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-section-sm text-white lg:py-section">
      <SpeedLines className="absolute -left-20 top-0 h-full w-[60%] text-impulse-500" />
      <Container className="relative">
        <dl className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="font-display text-4xl font-bold text-white lg:text-5xl">
                  {s.value}
                </span>
                {s.suffix && (
                  <span className="ml-2 font-display text-lg font-semibold text-impulse-400">
                    {s.suffix}
                  </span>
                )}
                <p className="mt-2 text-sm leading-relaxed text-white/60">{s.label}</p>
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
