/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#2DA950",
        black: "#1C1C1C",
        shade1: "#4E4E4E",
        shade2: "#C9C9C9",
        shade3: "#EFEFEF",
        shade4: "#F1F1F1",
      },
      fontFamily: {
        grace: ["Covered By Your Grace", "cursive"],
        manrope: ["Manrope", " sans-serif"],
      },
    },
    plugins: [],
  },
};
