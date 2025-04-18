/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx,mdx}", // Adjust paths if needed
    ],
    theme: {
        extend: {
            fontFamily: {
              montserrat: ['Montserrat', 'sans-serif'],
            },
          },
    },
    plugins: [],
  }