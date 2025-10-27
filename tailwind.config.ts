import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brown: '#903C0A',
        sand: {
          100: '#FFF8F3',
          200: '#F5EFE7', 
          300: '#E8D4BD',
          400: '#D4B5A0',
        },
        gold: '#D49D43',
        sage: '#6F988A',
        charcoal: '#2C2622',
        cream: '#FFFEF9',
      },
      fontSize: {
        'massive': '180px',
        'giant': '300px',
      },
      letterSpacing: {
        'luxury': '10px',
        'wide': '5px',
        'wider': '3px',
      },
    },
  },
  plugins: [],
}
export default config