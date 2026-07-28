// Fonte única de verdade dos tokens da Valoer Open Banking.
// Espelha docs/DESIGN-TOKENS.md. Alterou aqui -> reflete no site inteiro via preset Tailwind.

export const color = {
  // Marinho (marca / superfícies escuras) — derivado do logo
  navy: {
    900: "#0C1D35",
    800: "#122A4A", // cor institucional base
    700: "#1B3A63",
    600: "#274C7D",
  },
  // Impulso (ciano elétrico) — acento funcional: tecnologia + velocidade
  impulse: {
    400: "#7FD3F5",
    500: "#2BB7F0",
    600: "#1AA0D8",
  },
  // Neutros
  ink: "#0F1D33",
  slate: "#5A6B82",
  cloud: "#F4F7FB",
  line: "#E2E8F1",
  // Semânticas
  success: "#1FA97B",
  warning: "#E0A030",
  error: "#D64550",
};

// Escala tipográfica modular — razão 1.250 (major third), base 16px.
// [font-size, { lineHeight }]
export const fontSize = {
  xs: ["0.8rem", { lineHeight: "1.4" }],
  sm: ["0.9rem", { lineHeight: "1.45" }],
  base: ["1rem", { lineHeight: "1.55" }],
  lg: ["1.25rem", { lineHeight: "1.5" }],
  xl: ["1.563rem", { lineHeight: "1.3" }],
  "2xl": ["1.953rem", { lineHeight: "1.2" }],
  "3xl": ["2.441rem", { lineHeight: "1.12" }],
  "4xl": ["3.052rem", { lineHeight: "1.06" }],
  "5xl": ["3.815rem", { lineHeight: "1.02" }],
};

export const fontFamily = {
  // Auto-hospedadas via next/font/local — ver apps/web/src/lib/fonts.ts
  display: ["var(--font-clash)", "ui-sans-serif", "system-ui", "sans-serif"],
  sans: ["var(--font-hanken)", "ui-sans-serif", "system-ui", "sans-serif"],
};

// Espaçamento — base 8px (4px para ajuste fino)
export const spacing = {
  section: "6rem", // 96px — padding vertical de seção (desktop)
  "section-sm": "4rem", // 64px — mobile
};

// Raio — filosofia única "suave controlado"
export const borderRadius = {
  none: "0",
  sm: "6px",
  md: "10px", // padrão
  lg: "16px",
  pill: "999px",
};

// Elevação — navy translúcido, não preto
export const boxShadow = {
  sm: "0 1px 2px rgba(12,29,53,.06)",
  md: "0 8px 24px rgba(12,29,53,.10)",
  lg: "0 20px 48px rgba(12,29,53,.14)",
};

// Motion
export const duration = {
  fast: "180ms",
  base: "300ms",
  slow: "500ms",
};

export const easing = {
  out: "cubic-bezier(0.22, 1, 0.36, 1)",
};

export const screens = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
};

export const tokens = {
  color,
  fontSize,
  fontFamily,
  spacing,
  borderRadius,
  boxShadow,
  duration,
  easing,
  screens,
};

export default tokens;
