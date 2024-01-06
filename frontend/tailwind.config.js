/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      padding: {
        md: "10rem",
        lg: "10rem",
        sm: "2rem",
      },
    },
    fontFamily: {
      display1: ["Satisfy", "cursive"],
      display2: ["Dancing Script", "cursive"],
    },
  },
  plugins: [],
};
