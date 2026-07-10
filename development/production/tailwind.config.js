/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-dark': 'var(--primary-color)',
        'secondary-color': 'var(--secondary-color)',
        'third-color': 'var(--third-color)',
        'lynx': 'var(--lynx)',
        'accent': 'var(--accent)',
        'accent-soft': 'var(--accent-soft)',
        'on-accent': 'var(--on-accent)',
        'ink': 'var(--ink)',
        'muted': 'var(--muted)',
        'surface': 'var(--surface)',
      },
      fontFamily: {
        'display': ['Syne', 'sans-serif'],
        'body': ['Figtree', 'sans-serif'],
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
          'padding-left': '1.25rem',
          'padding-right': '1.25rem',
          '@media (min-width: 768px)': {
            'padding-left': '3.5rem',
            'padding-right': '3.5rem',
          },
        },
        '.bg-linear': {
          'background': 'var(--primary-color)',
        },
      });
    },
  ],
};
