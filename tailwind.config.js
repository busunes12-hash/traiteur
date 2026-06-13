/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: {
          50:  '#f5f3ef',
          100: '#e8e3d8',
          200: '#d0c9b8',
          300: '#b0a58f',
          400: '#8f8068',
          500: '#6e6050',
          600: '#524840',
          700: '#3a332d',
          800: '#221e1a',
          900: '#141210',
          950: '#0a0908',
        },
        champagne: {
          100: '#f9f0d8',
          200: '#f2e0b0',
          300: '#e8cc82',
          400: '#dcb856',
          500: '#c9a84c',
          600: '#a88836',
          700: '#7d6426',
          800: '#52401a',
          900: '#2a210e',
        },
        ivory: '#f7f3eb',
        mocha: '#1c1812',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '8xl':  ['6rem',   { lineHeight: '1.0', letterSpacing: '-0.02em' }],
        '9xl':  ['7.5rem', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        '10xl': ['9rem',   { lineHeight: '0.9',  letterSpacing: '-0.04em' }],
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.25, 0.1, 0.25, 1.0)',
        'dramatic': 'cubic-bezier(0.76, 0, 0.24, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-right': {
          '0%':   { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
        'ken-burns': {
          '0%':   { transform: 'scale(1.0)' },
          '100%': { transform: 'scale(1.08)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        'shimmer': {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', filter: 'drop-shadow(0 0 8px rgba(201, 168, 76, 0.4))' },
          '50%': { opacity: '0.8', filter: 'drop-shadow(0 0 16px rgba(201, 168, 76, 0.2))' },
        },
      },
      animation: {
        'fade-up':    'fade-up 0.9s cubic-bezier(0.25,0.1,0.25,1) both',
        'fade-in':    'fade-in 0.8s ease both',
        'slide-right':'slide-right 0.8s cubic-bezier(0.76,0,0.24,1) both',
        'ken-burns':  'ken-burns 8s ease-in-out infinite alternate',
        'float':      'float 5s ease-in-out infinite',
        'shimmer':    'shimmer 3s linear infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(201, 168, 76, 0.2)',
        'glow-lg': '0 0 40px rgba(201, 168, 76, 0.3)',
        'inner-gold': 'inset 0 1px 3px rgba(201, 168, 76, 0.2)',
      },
      spacing: {
        'clamp-sm': 'clamp(1rem, 3vw, 1.5rem)',
        'clamp-md': 'clamp(1.5rem, 5vw, 2rem)',
        'clamp-lg': 'clamp(2rem, 7vw, 3rem)',
        'clamp-xl': 'clamp(3rem, 10vw, 4rem)',
      },
    },
  },
  plugins: [],
};
