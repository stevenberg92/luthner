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
        bg:      '#070709',
        surface: '#0F0F13',
        gold: {
          DEFAULT: '#C9A84C',
          light:   '#E8D5A3',
          dark:    '#A08030',
        },
        border: 'rgba(255,255,255,0.07)',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans:  ['var(--font-inter)',    'system-ui', 'sans-serif'],
      },
      fontSize: {
        '8xl':  ['6rem',  { lineHeight: '1' }],
        '9xl':  ['8rem',  { lineHeight: '1' }],
        '10xl': ['10rem', { lineHeight: '1' }],
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
