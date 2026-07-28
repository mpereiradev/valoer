import type { Config } from "tailwindcss";
import preset from "@valoer/design-tokens/tailwind-preset";

export default {
  presets: [preset as Partial<Config>],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        lg: "2rem",
      },
      screens: {
        xl: "1200px",
      },
    },
  },
} satisfies Config;
