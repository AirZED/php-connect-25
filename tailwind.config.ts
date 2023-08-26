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
      },
      colors: {
        primary: "#170F36",
        tertiary: "#61CE70",
        secondary: "#FFAA22",
        "not-white": "#E9F7FF",
      },
      fontFamily: {
        heading: ["Bagoss Standard"],
        sans: ["PHP Connect Pro", "sans-serif"],
      },
      screens: {
        "3xl": "1366px",
      },
    },
  },
  plugins: [],
};
export default config;
