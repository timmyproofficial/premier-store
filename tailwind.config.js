/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-color': 'var(--primary-color)',
        'secondary-color': 'var(--secondary-color)',
        'body-color': 'var(--body-color)',
        'block-color': 'var(--block-color)',
        'white-color': 'var(--white-color)',
        'white-accent': 'var(--white-accent)',
        'dark-color': 'var(--dark-color)',
        'gray-color': 'var(--gray-color)',
        'gray-accent': 'var(--gray-accent)',
        'link-color': 'var(--link-color)',
      },
      boxShadow: {
        'product-shadow': 'var(--product-shadow)',
        'about-shadow': 'var(--about-shadow)',
      },
    },
  },
  plugins: [],
};
