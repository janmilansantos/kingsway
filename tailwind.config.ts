import type { Config } from 'tailwindcss';
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#071325',
          dim: '#071325',
          bright: '#2E394D',
          'container-lowest': '#030E20',
          'container-low': '#101C2E',
          container: '#142032',
          'container-high': '#1F2A3D',
          'container-highest': '#2A3548',
          variant: '#2A3548',
          tint: '#AAC7FF',
        },
        primary: { DEFAULT: '#AAC7FF', container: '#4590FA' },
        'on-primary': { DEFAULT: '#002F64', container: '#002958' },
        secondary: { DEFAULT: '#AEC6FF', container: '#004EAC' },
        'on-secondary': { DEFAULT: '#002E6A', container: '#ADC6FF' },
        tertiary: { DEFAULT: '#A3C9FF', container: '#4E93E3' },
        'on-surface': { DEFAULT: '#D7E3FC', variant: '#C1C6D5' },
        outline: { DEFAULT: '#8B919E', variant: '#414753' },
        error: { DEFAULT: '#FFB4AB', container: '#93000A' },
        inverse: { surface: '#D7E3FC', 'on-surface': '#253144', primary: '#005DB8' },
        star: '#6AADFF',
        mist: '#A8C8F8',
        ice: '#F4F8FF',
      },
      fontFamily: {
        headline: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Manrope"', 'sans-serif'],
        label: ['"Inter"', 'sans-serif'],
      },
      maxWidth: { site: '80rem' },
      borderRadius: { btn: '0.5rem', card: '0.75rem', 'card-lg': '1rem' },
      boxShadow: {
        rest: '0 2px 8px rgba(0,0,0,0.2)',
        hover: '0 8px 32px rgba(0,0,0,0.4)',
        glow: '0 20px 50px rgba(46,127,232,0.08)',
        'blue-glow': '0 40px 100px rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [],
} satisfies Config;
