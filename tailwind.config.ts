import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-2": "var(--bg-2)",
        fg: "var(--fg)",
        "fg-dim": "var(--fg-dim)",
        line: "var(--line)",
        accent: "var(--accent)",
        "accent-2": "var(--accent-2)",
        "chip-bg": "var(--chip-bg)",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Times New Roman", "serif"],
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
        display: ["var(--font-space)", "system-ui", "sans-serif"],
      },
      transitionTimingFunction: {
        "ease-custom": "cubic-bezier(.2,.7,.2,1)",
        "ease-long": "cubic-bezier(.16,1,.3,1)",
      },
      keyframes: {
        scrollLine: {
          "0%": { transform: "translateX(-100%)" },
          "50%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "scroll-line": "scrollLine 2.4s cubic-bezier(.2,.7,.2,1) infinite",
        marquee: "marquee 60s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
