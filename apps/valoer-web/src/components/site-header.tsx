"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { ButtonLink } from "@/components/button";
import { cn } from "@/lib/cn";

const NAV = [
  { label: "Consórcio", href: "#produtos" },
  { label: "Seguro", href: "#produtos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Por que a Valoer", href: "#diferenciais" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300 ease-out",
        scrolled || open ? "bg-navy-800/95 shadow-sm backdrop-blur" : "bg-transparent",
      )}
    >
      <Container className="flex h-20 items-center justify-between text-white">
        <a href="#topo" aria-label="Valoer — página inicial">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative text-sm font-medium text-white/85 transition-colors hover:text-white after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-impulse-500 after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="#simulador" surface="dark" variant="primary">
            Simular agora
          </ButtonLink>
        </div>

        <button
          type="button"
          className="lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="flex flex-col gap-1.5">
            <span className={cn("block h-0.5 w-6 bg-white transition", open && "translate-y-2 rotate-45")} />
            <span className={cn("block h-0.5 w-6 bg-white transition", open && "opacity-0")} />
            <span className={cn("block h-0.5 w-6 bg-white transition", open && "-translate-y-2 -rotate-45")} />
          </span>
        </button>
      </Container>

      {open && (
        <div className="lg:hidden">
          <Container className="flex flex-col gap-1 pb-6 text-white">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-base font-medium text-white/90 hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}
            <ButtonLink
              href="#simulador"
              surface="dark"
              variant="primary"
              className="mt-3 w-full"
              onClick={() => setOpen(false)}
            >
              Simular agora
            </ButtonLink>
          </Container>
        </div>
      )}
    </header>
  );
}
