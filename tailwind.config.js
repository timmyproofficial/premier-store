/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-color': 'var(--primary-color)',
        'secondary-color': 'var(--secondary-color)',
        'body-color': 'var(--body-color)',
        'white-color': 'var(--white-color)',
        'white-accent': 'var(--white-accent)',
        'dark-color': 'var(--dark-color)',
      },
    },
  },
  plugins: [],
};
