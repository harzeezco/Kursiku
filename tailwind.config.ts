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
        gray: {
          100: '#FAF9FF',
        },
        dark: {
          200: '#555555',
          300: '#363636',
          400: '#222',
          500: '#21263C',
          600: '#040D21',
        },
        green: {
          100: '#B3C7BB',
          200: '#AAA',
          300: '#ABABAB',
          350: '#ABAFB3',
          400: '#53BD95',
        },
        orange: {
          500: '#FE7747',
        },
        yellow: {
          500: '#FECB32',
        },
      },
      fontFamily: {
        publicSans: ['var(--font--public-sans)'],
      },
    },
  },
  plugins: [],
};
export default config;
