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
        blue: {
          400: '#0F8CE9',
        },
        gray: {
          50: '#FEFEFE',
          100: '#FAF9FF',
          200: '#6F7071',
          300: '#717271',
        },
        dark: {
          200: '#555555',
          250: '#575757',
          300: '#363636',
          350: '#333936',
          400: '#161C28',
          450: '#111111',
          500: '#21263C',
          600: '#040D21',
          700: '#3E4250',
          900: '#101512',
        },
        green: {
          100: '#B3C7BB',
          200: '#AAA',
          300: '#ABABAB',
          350: '#6ECEAA',
          400: '#53BD95',
          800: '#1E4F58',
          900: '#103C44',
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
