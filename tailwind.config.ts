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
        // Clean Luxury — charcoal / near-black as primary accent
        primary: {
          DEFAULT: '#1B1B1A',
          dark:    '#000000',
          light:   '#3A3A38',
        },
        // Warm bronze / beige accent
        gold: {
          DEFAULT: '#B0915F',
          light:   '#D8C3A0',
          dark:    '#8A6F43',
        },
        // Soft beige & warm greys
        warm: {
          50:  '#FBFAF7',
          100: '#F4F1EA',
          200: '#E8E3D7',
          300: '#D6CFBE',
        },
        text: {
          DEFAULT: '#1A1A19',
          muted:   '#67655E',
          light:   '#9C988D',
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
