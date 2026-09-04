import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "home-hero-spiral": 'url("/images/backgrounds/home-hero-spiral.png")',
        "connect-pattern": 'url("/images/backgrounds/connect-pattern.png")',
        "connect-pattern-2": 'url("/images/backgrounds/connect-pattern-2.png")',
        "connect-pattern-3": 'url("/images/backgrounds/connect-pattern-3.png")',
        "hero-photo": 'url("/images/backgrounds/hero-3.png")',
      },
      colors: {
        primary: "#170F36",
        tertiary: "#61CE70",
        secondary: "#FFAA22",
        "not-white": "#E9F7FF",
        accent: "#361FAC",
        "accent-dark": "#5636D6",
        ink: "#0A0A0D",
        paper: "#F3F0FA",
      },
      fontFamily: {
        heading: ["Bagoss Standard"],
        display: ["ClashDisplay", "sans-serif"],
        sans: ["var(--font-almarai)", "sans-serif"],
        primary: ["var(--font-almarai)", "sans-serif"],
        secondary: ["ClashDisplay", "sans-serif"],
        mono: ["Geist Mono", "monospace"],
      },
      screens: {
        "3xl": "1366px",
      },
    },
  },
  plugins: [],
};
export default config;
