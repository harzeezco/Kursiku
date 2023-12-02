import type { Config } from 'tailwindcss'

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
          500: '#101010',
          600: '#222',
          700: '#2F2F2F',
        },
        gray: {
          100: '#FAFAFA',
          200: '#AAA',
          300: '#ABABAB',
          350: '#ABAFB3',
          400: '#909CB5',
        },
      },
    },
  },
  plugins: [],
};
export default config
