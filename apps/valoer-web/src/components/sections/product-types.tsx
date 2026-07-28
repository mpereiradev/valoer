import type { ComponentType, SVGProps } from "react";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import {
  IconCar,
  IconHome,
  IconMoto,
  IconHeart,
  IconShield,
  IconPlus,
  IconArrowRight,
} from "@/components/icons";

type Product = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
  from: string;
  tag: "Consórcio" | "Seguro";
};

const PRODUCTS: Product[] = [
  { icon: IconCar, title: "Consórcio de automóvel", desc: "Carro 0km, seminovo ou blindado sem juros, no seu ritmo.", from: "R$ 1.450/mês", tag: "Consórcio" },
  { icon: IconHome, title: "Consórcio de imóvel", desc: "Casa, apartamento, terreno ou reforma com parcela que cabe.", from: "R$ 2.100/mês", tag: "Consórcio" },
  { icon: IconMoto, title: "Consórcio de moto", desc: "Da urbana à alta cilindrada, sem entrada e sem juros.", from: "R$ 480/mês", tag: "Consórcio" },
  { icon: IconHeart, title: "Seguro de vida", desc: "Proteção para quem você ama, com coberturas sob medida.", from: "R$ 39/mês", tag: "Seguro" },
  { icon: IconShield, title: "Seguro auto", desc: "Cobertura completa, assistência 24h e preço justo.", from: "R$ 120/mês", tag: "Seguro" },
  { icon: IconPlus, title: "Seguro saúde", desc: "Planos e coberturas comparados para o seu perfil.", from: "R$ 190/mês", tag: "Seguro" },
];

export function ProductTypes() {
  return (
    <section id="produtos" className="bg-cloud py-section-sm lg:py-section">
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-impulse-600">Soluções</p>
          <h2 className="mt-3 text-3xl lg:text-4xl">
            Um lugar para comparar e contratar tudo.
          </h2>
          <p className="mt-4 text-lg text-slate">
            Começamos por consórcio e seguro — as decisões que mais pesam no bolso — reunindo
            várias operadoras para você escolher com clareza.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.06}>
              <a
                href="#simulador"
                className="group flex h-full flex-col rounded-md border border-line bg-white p-6 transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-navy-800/[0.04] text-impulse-600">
                    <p.icon className="h-6 w-6" />
                  </span>
                  <span className="rounded-pill bg-cloud px-2.5 py-1 text-xs font-medium text-slate">
                    {p.tag}
                  </span>
                </div>

                <h3 className="mt-5 text-xl">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">{p.desc}</p>

                <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                  <span className="text-sm text-slate">
                    a partir de <span className="font-display font-semibold text-ink">{p.from}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-impulse-600">
                    Simular
                    <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
