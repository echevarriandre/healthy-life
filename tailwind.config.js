/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: "'Rubik', sans-serif",
        recoleta: "'Recoleta', sans-serif",
        lilita: "'Lilita One', cursive",
        pacifico: "'Pacifico', cursive",
      },
    },
  },
  plugins: [
    // require('@headlessui/tailwindcss')({ prefix: 'ui' })
  ],
};
