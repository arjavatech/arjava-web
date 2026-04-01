/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          base:     '#080B14',
          surface:  '#0D1117',
          card:     '#161B27',
          line:     '#1E2D40',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%':      { transform: 'translate(30px,-50px) scale(1.1)' },
          '66%':      { transform: 'translate(-20px,20px) scale(0.9)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-18px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(45,212,191,0.25)' },
          '50%':      { boxShadow: '0 0 45px rgba(45,212,191,0.55)' },
        },
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'spin-slow': {
          '0%':   { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        blob:         'blob 8s ease-in-out infinite',
        float:        'float 5s ease-in-out infinite',
        shimmer:      'shimmer 2.5s linear infinite',
        'pulse-glow': 'pulse-glow 2.5s ease-in-out infinite',
        'fade-up':    'fade-up 0.6s ease-out forwards',
        'spin-slow':  'spin-slow 20s linear infinite',
      },
      backgroundSize: {
        '200%': '200%',
      },
      dropShadow: {
        teal: '0 0 35px rgba(45,212,191,0.35)',
        sky:  '0 0 35px rgba(56,189,248,0.35)',
      },
    },
  },
  plugins: [],
}
