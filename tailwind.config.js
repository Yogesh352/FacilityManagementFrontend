/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customblue: "#94c0db",
        lighterblue:  "#ecf4f9",
        slightlydarker: "#d4e6f1",
        rulessidebar: "#9DBFD8"
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("tailwind-scrollbar-hide")],
};
