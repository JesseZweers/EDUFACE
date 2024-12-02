/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',              // Include the root HTML file
    './src/**/*.{vue,js,ts,jsx,tsx}', // Include all Vue, JavaScript, and TypeScript files in the `src` directory
  ],
  theme: {
    extend: {
      colors: {
        edufaceGreen: '#00e075',
        edufaceBlue: '#002333',
        lightBlue: '#e4eef2'
      },
      fontFamily: {
        sans: ['Spartan', 'sans-serif']
      },
    },
  },
  plugins: [],
};

