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
        primary: {
          DEFAULT: '#1A4B3A',
          dark:    '#122E24',
          light:   '#2A6B54',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light:   '#E8D5A3',
          dark:    '#A08030',
        },
        warm: {
          50:  '#FDFCF9',
          100: '#F7F5F0',
          200: '#EDE9E0',
          300: '#DDD9CF',
        },
        text: {
          DEFAULT: '#1C1C1C',
          muted:   '#6B6B6B',
          light:   '#9B9B9B',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans:  ['var(--font-inter)',    'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
