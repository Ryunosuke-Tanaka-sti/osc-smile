/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        dela: ['Dela Gothic One', 'sans-serif'],
        kiwi: ['Kiwi Maru', 'serif'],
        reggae: ['Reggae One', 'sans-serif'],
      },
      colors: {
        takenoko: '#22C55E',
        kinoko: '#F59E0B',
        main: '#333333',
      },
    },
  },
};
