/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: "Raleway, ui-serif",
        archivo: "Archivo, sans-serif;",
      },
    },
  },
  plugins: [],
};
