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
        dark: {
          400: '#222',
          500: '#2F2F2F',
          600: '#040D21',
        },
        gray: {
          100: '#FAFAFA',
          200: '#AAA',
          300: '#ABABAB',
          350: '#ABAFB3',
          400: '#909CB5',
        },
        orange: {
          500: '#FE7747',
        },
      },
    },
  },
  plugins: [],
};
export default config;
