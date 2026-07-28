import type { Metadata, Viewport } from "next";
import { clashDisplay, hankenGrotesk } from "@/lib/fonts";
import { cn } from "@/lib/cn";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://valoer.com.br"),
  title: {
    default: "Valoer Open Banking — Consórcio e Seguro sem burocracia",
    template: "%s · Valoer Open Banking",
  },
  description:
    "Compare opções de consórcio e seguro e simule em minutos. A Valoer tira a burocracia e o custo alto da contratação e coloca você no controle.",
  openGraph: {
    title: "Valoer Open Banking",
    description:
      "Compare e simule consórcio e seguro sem burocracia. Soluções financeiras no seu ritmo.",
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#122A4A",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={cn(clashDisplay.variable, hankenGrotesk.variable)}
    >
      <body>
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-navy-800 focus:px-4 focus:py-2 focus:text-white"
        >
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
