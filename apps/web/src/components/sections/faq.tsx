"use client";

import { useState } from "react";
import { Container } from "@/components/container";
import { IconChevron } from "@/components/icons";
import { cn } from "@/lib/cn";

const ITEMS = [
  {
    q: "A simulação tem algum custo ou compromisso?",
    a: "Nenhum. Você simula quantas vezes quiser, sem cadastro obrigatório e sem compromisso de contratação.",
  },
  {
    q: "A Valoer é uma operadora de consórcio ou seguro?",
    a: "A Valoer é uma plataforma de soluções financeiras que reúne e compara opções de operadoras parceiras, ajudando você a escolher a melhor para o seu perfil.",
  },
  {
    q: "Preciso ter conta em algum banco para contratar?",
    a: "Não. A contratação é feita de forma independente e 100% online, sem exigência de conta em uma instituição específica.",
  },
  {
    q: "Quais soluções estão disponíveis hoje?",
    a: "Começamos por consórcio (automóvel, imóvel, moto e serviços) e seguros (vida, auto, saúde e residencial). Investimentos, financiamentos e pagamentos chegam nas próximas fases.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-cloud py-section-sm lg:py-section">
      <Container className="max-w-3xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-impulse-600">Dúvidas</p>
          <h2 className="mt-3 text-3xl lg:text-4xl">Perguntas frequentes</h2>
        </div>

        <div className="mt-10 divide-y divide-line rounded-lg border border-line bg-white">
          {ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <h3>
                  <button
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="font-display text-base font-semibold text-ink">{item.q}</span>
                    <IconChevron
                      className={cn(
                        "h-5 w-5 shrink-0 text-impulse-600 transition-transform duration-base",
                        isOpen && "rotate-180",
                      )}
                    />
                  </button>
                </h3>
                <div
                  className={cn(
                    "grid overflow-hidden px-6 transition-all duration-base ease-out",
                    isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <p className="min-h-0 text-sm leading-relaxed text-slate">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
