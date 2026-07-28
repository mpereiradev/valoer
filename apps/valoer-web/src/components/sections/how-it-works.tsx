import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";

const STEPS = [
  { n: "1", title: "Simule", desc: "Escolha o tipo, defina o valor e veja a estimativa na hora — sem cadastro." },
  { n: "2", title: "Compare", desc: "Reunimos opções de várias operadoras para o seu perfil, lado a lado." },
  { n: "3", title: "Contrate online", desc: "Fechou negócio? A contratação é 100% digital, sem papelada." },
  { n: "4", title: "Acompanhe", desc: "Gerencie parcelas, apólices e resultados direto pelo painel Valoer." },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-white py-section-sm lg:py-section">
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-impulse-600">Como funciona</p>
          <h2 className="mt-3 text-3xl lg:text-4xl">Do primeiro clique ao contrato, em 4 passos.</h2>
        </div>

        <ol className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <li className="relative">
                {/* conector diagonal ascendente (assinatura de movimento) */}
                {i < STEPS.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute left-14 top-5 hidden h-px w-[calc(100%-2rem)] origin-left -rotate-6 bg-linear-to-r from-impulse-500/40 to-transparent lg:block"
                  />
                )}
                <span className="font-display text-5xl font-bold text-impulse-500">{s.n}</span>
                <h3 className="mt-4 text-xl">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{s.desc}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
