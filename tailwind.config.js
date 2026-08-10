/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#FDF6F7',
        'ink-deep': '#FFFFFF',
        cream: '#9B1D44',
        'cream-soft': '#C2597A',
        gold: '#9B1D44',
        'gold-soft': '#C2597A',
        rose: '#1A1714',
        mute: '#9A8F84',
      },
      fontFamily: {
        serif: ['Fraunces', 'serif'],
        display: ['Italiana', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        'wider-2': '0.18em',
        'wider-3': '0.28em',
      },
    },
  },
  plugins: [],
}
