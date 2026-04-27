import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F8F6F1",
        bone: "#F2EFE8",
        ink: "#0E0E0E",
        graphite: "#1A1A1A",
        slate: "#3A3A3A",
        ash: "#6B6B6B",
        gold: {
          DEFAULT: "#B8893E",
          soft: "#C9A36A",
          deep: "#8E6A2E",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
      transitionTimingFunction: {
        luxe: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(0,0,0,0.18)",
        card: "0 25px 80px -30px rgba(0,0,0,0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
