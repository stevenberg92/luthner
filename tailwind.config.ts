import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A84C',
          light: '#D4B876',
          dark: '#A08030',
        },
        dark: {
          DEFAULT: '#0D0D0D',
          900: '#0D0D0D',
          800: '#141414',
          700: '#1A1A1A',
          600: '#2D2D2D',
          500: '#404040',
        },
        cream: {
          DEFAULT: '#FAFAF8',
          100: '#F5F5F0',
          200: '#EEEDE8',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
