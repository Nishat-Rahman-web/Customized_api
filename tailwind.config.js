/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "16px",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      Polksa: ["Playwrite PL", "cursive"],
    },
  },
  plugins: [],
};
