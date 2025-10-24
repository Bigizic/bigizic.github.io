/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        /*'primary-dark': '#142D25',*/
        'primary-dark': '#000000',
        'secondary-color': '#000000',
        'third-color': '#F7DFBA',
        'lynx': '#F7F7F7',
        'accent': '#12d640',
      },
      fontFamily: {
        'bebas': ['Bebas Neue', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      animation: {
        'bounce': 'bounce 2s infinite',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};