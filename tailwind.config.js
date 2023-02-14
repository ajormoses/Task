/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        // xs: "320px",

        sm: "500px",

        md: "700px",

        lg: "1000px",

        xl: "1200px",

        x: "1400px",
      },
    },
  },
  plugins: [],
};
