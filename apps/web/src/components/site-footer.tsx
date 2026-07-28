import { Container } from "@/components/container";
import { Logo } from "@/components/logo";

const COLUMNS = [
  {
    title: "Produtos",
    links: ["Consórcio de automóvel", "Consórcio de imóvel", "Seguro de vida", "Seguro auto"],
  },
  {
    title: "Institucional",
    links: ["Sobre a Valoer", "Como funciona", "Trabalhe conosco", "Blog"],
  },
  {
    title: "Ajuda",
    links: ["Central de ajuda", "Fale com um consultor", "Perguntas frequentes"],
  },
  {
    title: "Legal",
    links: ["Termos de uso", "Política de privacidade", "Regulamentos"],
  },
];

const SOCIAL = ["Instagram", "LinkedIn", "YouTube", "Facebook"];

export function SiteFooter() {
  return (
    <footer className="bg-navy-900 text-white/70">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <Logo className="text-white" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              Soluções financeiras sem burocracia. Compare opções de consórcio e seguro
              e simule em minutos.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="font-display text-sm font-semibold text-white">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/60 transition-colors hover:text-impulse-400">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-8 text-xs text-white/50 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-5">
            {SOCIAL.map((s) => (
              <a key={s} href="#" className="transition-colors hover:text-impulse-400">
                {s}
              </a>
            ))}
          </div>
          <p className="max-w-2xl leading-relaxed">
            Valoer Open Banking · CNPJ 00.000.000/0001-00 · Este site é uma peça institucional.
            Condições, taxas e disponibilidade sujeitas à análise e aos regulamentos vigentes.
          </p>
        </div>
      </Container>
    </footer>
  );
}
