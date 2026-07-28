import { cn } from "@/lib/cn";

/**
 * Motivo de linhas diagonais ascendentes (assinatura visual derivada do logo).
 * Decorativo — aria-hidden. Usado como textura de fundo em seções navy.
 */
export function SpeedLines({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={cn("pointer-events-none select-none", className)}
      viewBox="0 0 400 300"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
    >
      {Array.from({ length: 7 }).map((_, i) => {
        const offset = i * 26;
        return (
          <path
            key={i}
            d={`M${-40 + offset} ${300} Q ${160 + offset} ${200 - offset * 0.4} ${420} ${40 - offset * 0.2}`}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity={0.10 + i * 0.015}
          />
        );
      })}
    </svg>
  );
}
