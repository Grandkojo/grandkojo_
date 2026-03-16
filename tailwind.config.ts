import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
        mono: ['var(--font-mono)'],
      },
      colors: {
        cream: '#F5F0E8',
        warm: '#EDE5D0',
        parchment: '#D4C9A8',
        ink: '#1A1410',
        'ink-light': '#2E2520',
        clay: '#8B4A2F',
        rust: '#C4622D',
        sage: '#5C7A5C',
        gold: '#C9973A',
        'gold-light': '#E8C56A',
      },
    },
  },
  plugins: [],
}
export default config
