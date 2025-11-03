/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        /*'primary-dark': '#142D25',*/
        //'primary-dark': '#000000',
        'primary-dark': '#fff',
        'secondary-color': '#fff',
        'third-color': '#F7DFBA',
        'lynx': '#F7F7F7',
        //'accent': '#12d640',
        'accent': '#000000',
      },
      fontFamily: {
        'bebas': ['Bebas Neue', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'geist-mono': ['Geist Mono', 'monospace'],
      },
      animation: {
        'bounce': 'bounce 2s infinite',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.px-default': {
          'padding-left': '1rem',
          'padding-right': '1rem',
          '@media (min-width: 768px)': {
            'padding-left': '4rem',
            'padding-right': '4rem',
          },
        },
        '.bg-linear': {
          'background': 'rgba(0, 0, 0, 0.15)'
        }
      });
    },
  ],
};