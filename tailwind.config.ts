import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#333333",
          50: "#f5f5f5",
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#9e9e9e",
          400: "#707070",
          500: "#4d4d4d",
          600: "#3d3d3d",
          700: "#333333",
          800: "#242424",
          900: "#161616",
          950: "#0d0d0d",
        },
        gold: {
          DEFAULT: "#c9a24b",
          50: "#fbf6ea",
          100: "#f5ead0",
          200: "#ecd6a1",
          300: "#e0bd6f",
          400: "#d3a94e",
          500: "#c9a24b",
          600: "#a8813a",
          700: "#836230",
          800: "#6b4f2c",
          900: "#5a4228",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "1200px",
      },
      boxShadow: {
        card: "0 4px 24px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
