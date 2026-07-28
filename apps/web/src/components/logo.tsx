import { cn } from "@/lib/cn";

/**
 * Marca Valoer — símbolo (avião/seta ascendente + linhas de velocidade) + wordmark.
 * Vetorial em currentColor (funciona branco sobre navy e navy sobre claro).
 * NOTA: aproximação fiel do logo em `references/logo-valoer.png`; substituir pelo
 * SVG oficial quando o arquivo vetor for entregue.
 */
export function Logo({
  className,
  withWordmark = true,
  subtitle = true,
}: {
  className?: string;
  withWordmark?: boolean;
  subtitle?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-3 text-current", className)}>
      <svg
        viewBox="0 0 64 48"
        className="h-8 w-auto shrink-0"
        role="img"
        aria-label="Valoer"
        fill="none"
      >
        {/* linhas de velocidade */}
        <path d="M3 27 Q20 19 31 15" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M6 34 Q22 26 33 21" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M11 40 Q26 33 36 28" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        {/* avião / seta com vértice em V */}
        <path
          d="M30 14 L52 6 L38 46 L33 30 Z"
          fill="currentColor"
        />
      </svg>

      {withWordmark && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-lg font-bold tracking-[0.14em]">VALOER</span>
          {subtitle && (
            <span className="mt-0.5 text-[0.62rem] font-medium uppercase tracking-[0.22em] opacity-80">
              Open Banking
            </span>
          )}
        </span>
      )}
    </span>
  );
}
