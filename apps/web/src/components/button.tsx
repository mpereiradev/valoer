import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Surface = "light" | "dark";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-6 min-h-12 " +
  "text-base font-semibold transition duration-fast ease-out " +
  "focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none " +
  "hover:-translate-y-px will-change-transform";

// Regra de contraste: nunca texto branco sobre impulse-500 -> botão ciano usa texto ink.
const styles: Record<Surface, Record<Variant, string>> = {
  light: {
    primary: "bg-navy-800 text-white hover:bg-navy-700",
    secondary: "border-[1.5px] border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white",
    ghost: "text-impulse-600 hover:text-navy-800 px-2",
  },
  dark: {
    primary: "bg-impulse-500 text-ink hover:bg-impulse-600",
    secondary: "border-[1.5px] border-impulse-400 text-white hover:bg-white/10",
    ghost: "text-impulse-400 hover:text-white px-2",
  },
};

type CommonProps = {
  variant?: Variant;
  surface?: Surface;
  className?: string;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  surface = "light",
  className,
  children,
  ...rest
}: CommonProps & ComponentPropsWithoutRef<"button">) {
  return (
    <button className={cn(base, styles[surface][variant], className)} {...rest}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  surface = "light",
  className,
  children,
  ...rest
}: CommonProps & ComponentPropsWithoutRef<"a">) {
  return (
    <a className={cn(base, styles[surface][variant], className)} {...rest}>
      {children}
    </a>
  );
}
