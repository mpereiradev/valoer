"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/button";

type Mode = "consorcio" | "seguro";

type TipoConfig = {
  id: string;
  label: string;
  min: number;
  max: number;
  step: number;
  start: number;
};

const CONSORCIO: TipoConfig[] = [
  { id: "auto", label: "Automóvel", min: 30_000, max: 400_000, step: 5_000, start: 90_000 },
  { id: "imovel", label: "Imóvel", min: 80_000, max: 1_000_000, step: 10_000, start: 300_000 },
  { id: "moto", label: "Moto", min: 10_000, max: 60_000, step: 1_000, start: 22_000 },
  { id: "servicos", label: "Serviços", min: 5_000, max: 80_000, step: 1_000, start: 20_000 },
];

const SEGURO: TipoConfig[] = [
  { id: "vida", label: "Vida", min: 50_000, max: 1_000_000, step: 10_000, start: 200_000 },
  { id: "auto", label: "Auto", min: 20_000, max: 300_000, step: 5_000, start: 70_000 },
  { id: "saude", label: "Saúde", min: 20_000, max: 500_000, step: 10_000, start: 120_000 },
  { id: "resid", label: "Residencial", min: 50_000, max: 800_000, step: 10_000, start: 250_000 },
];

const brl = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});

function estimateMonthly(mode: Mode, tipoId: string, valor: number): number {
  if (mode === "consorcio") {
    const prazo = tipoId === "imovel" ? 200 : tipoId === "moto" ? 48 : 72;
    return (valor * 1.16) / prazo; // crédito + taxa adm diluídos no prazo (estimativa)
  }
  // prêmio mensal aproximado por faixa de cobertura
  const fator = tipoId === "auto" ? 0.006 : tipoId === "saude" ? 0.004 : 0.0011;
  return valor * fator;
}

export function Simulator({ id = "simulador" }: { id?: string }) {
  const [mode, setMode] = useState<Mode>("consorcio");
  const [tipoIndex, setTipoIndex] = useState(0);

  const tipos = mode === "consorcio" ? CONSORCIO : SEGURO;
  const tipo = tipos[tipoIndex] ?? tipos[0]!;

  const [valorMap, setValorMap] = useState<Record<string, number>>({});
  const key = `${mode}:${tipo.id}`;
  const valor = valorMap[key] ?? tipo.start;

  const setValor = (v: number) => setValorMap((m) => ({ ...m, [key]: v }));

  const monthly = useMemo(
    () => estimateMonthly(mode, tipo.id, valor),
    [mode, tipo.id, valor],
  );

  const pct = ((valor - tipo.min) / (tipo.max - tipo.min)) * 100;

  const switchMode = (next: Mode) => {
    setMode(next);
    setTipoIndex(0);
  };

  return (
    <section
      id={id}
      aria-label="Simulador"
      className="rounded-lg bg-white p-6 shadow-lg ring-1 ring-line sm:p-8"
    >
      {/* Segmentação Consórcio / Seguro */}
      <div className="grid grid-cols-2 rounded-md bg-cloud p-1" role="tablist" aria-label="Tipo de solução">
        {(["consorcio", "seguro"] as Mode[]).map((m) => (
          <button
            key={m}
            role="tab"
            aria-selected={mode === m}
            onClick={() => switchMode(m)}
            className={cn(
              "rounded-[7px] py-2.5 text-sm font-semibold transition duration-fast ease-out",
              mode === m ? "bg-navy-800 text-white shadow-sm" : "text-slate hover:text-ink",
            )}
          >
            {m === "consorcio" ? "Consórcio" : "Seguro"}
          </button>
        ))}
      </div>

      {/* Chips de tipo */}
      <fieldset className="mt-6">
        <legend className="text-xs font-semibold uppercase tracking-wider text-slate">
          {mode === "consorcio" ? "O que você quer conquistar?" : "O que você quer proteger?"}
        </legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {tipos.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setTipoIndex(i)}
              aria-pressed={tipoIndex === i}
              className={cn(
                "rounded-pill border px-4 py-2 text-sm font-medium transition duration-fast ease-out",
                tipoIndex === i
                  ? "border-navy-800 bg-navy-800 text-white"
                  : "border-line text-slate hover:border-navy-600 hover:text-ink",
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
      </fieldset>

      {/* Slider de valor */}
      <div className="mt-7">
        <div className="flex items-end justify-between">
          <label htmlFor="valor" className="text-sm font-medium text-slate">
            {mode === "consorcio" ? "Valor do crédito" : "Cobertura desejada"}
          </label>
          <span className="tabular font-display text-3xl font-bold text-ink">
            {brl.format(valor)}
          </span>
        </div>

        <input
          id="valor"
          type="range"
          min={tipo.min}
          max={tipo.max}
          step={tipo.step}
          value={valor}
          onChange={(e) => setValor(Number(e.target.value))}
          aria-valuetext={brl.format(valor)}
          className="valoer-range mt-4 w-full"
          style={{ ["--pct" as string]: `${pct}%` }}
        />

        <div className="mt-2 flex justify-between text-xs text-slate">
          <span>{brl.format(tipo.min)}</span>
          <span>{brl.format(tipo.max)}</span>
        </div>
      </div>

      {/* Estimativa + CTA */}
      <div className="mt-7 flex flex-col gap-4 rounded-md bg-cloud p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-slate">
            {mode === "consorcio" ? "Parcela estimada" : "Prêmio mensal estimado"}
          </p>
          <p className="tabular font-display text-2xl font-bold text-navy-800">
            {brl.format(monthly)}
            <span className="ml-1 text-sm font-medium text-slate">/mês</span>
          </p>
        </div>
        <Button className="w-full sm:w-auto">Simular agora</Button>
      </div>

      <p className="mt-3 text-center text-xs text-slate">
        Estimativa ilustrativa. O valor final depende da análise e do plano escolhido.
      </p>
    </section>
  );
}
