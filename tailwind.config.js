/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#FFF0F2', // Soft pink background
        'ink-deep': '#FFFFFF', // Clean white background for cards
        cream: '#9B1D44', // Deep burgundy brand color
        'cream-soft': '#C2597A',
        gold: '#9B1D44',
        'gold-soft': '#C2597A',
        rose: '#1A1714',
        mute: '#9A8F84',
        whatsapp: '#25D366',
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
