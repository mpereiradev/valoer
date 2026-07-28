import localFont from "next/font/local";
import { Hanken_Grotesk } from "next/font/google";

// Display — Clash Display (Fontshare), auto-hospedada. Ecoa a geometria larga do wordmark.
export const clashDisplay = localFont({
  src: [
    { path: "../fonts/ClashDisplay-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/ClashDisplay-Semibold.woff2", weight: "600", style: "normal" },
    { path: "../fonts/ClashDisplay-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-clash",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});

// Texto/UI — Hanken Grotesk, humanista e legível ("acessível").
export const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hanken",
  display: "swap",
});
