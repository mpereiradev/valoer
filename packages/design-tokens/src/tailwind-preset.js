// Preset Tailwind da Valoer. Consumido por apps/web/tailwind.config.ts.
// Regra da constituição DevMove: nada de valores default do Tailwind — tudo vem dos tokens.
import {
  color,
  fontSize,
  fontFamily,
  spacing,
  borderRadius,
  boxShadow,
  duration,
  easing,
  screens,
} from "./tokens.js";

/** @type {import('tailwindcss').Config} */
const preset = {
  theme: {
    // screens sobrescritos deliberadamente
    screens,
    // paleta reduzida e intencional (não herdar as ~250 cores default)
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      black: "#000000",
      navy: color.navy,
      impulse: color.impulse,
      ink: color.ink,
      slate: color.slate,
      cloud: color.cloud,
      line: color.line,
      success: color.success,
      warning: color.warning,
      error: color.error,
    },
    fontFamily,
    fontSize,
    borderRadius,
    boxShadow,
    transitionTimingFunction: {
      out: easing.out,
    },
    transitionDuration: {
      fast: duration.fast,
      base: duration.base,
      slow: duration.slow,
    },
    extend: {
      spacing,
      maxWidth: {
        container: "1200px",
      },
      keyframes: {
        // reveal ascendente (assinatura da marca) — fallback CSS quando sem JS
        rise: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        rise: `rise ${duration.slow} ${easing.out} both`,
      },
    },
  },
  plugins: [],
};

export default preset;
