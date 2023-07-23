/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        fira: 'var(--font-fira)',
        poppins: 'var(--font-poppins)',
      },
      colors: {
        green_bg: '#24393F',
      },
    },
  },
  plugins: [require('tailwind-utopia')],
};
