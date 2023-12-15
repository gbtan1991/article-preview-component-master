/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        veryDarkGrayisBlue: "hsl(217, 19%, 35%)",
        desaturatedDarkBlue: "hsl(214, 17%, 51%)",
        grayishBlue: "hsl(212, 23%, 69%)",
        lightGrayishBlue: "hsl(210, 46%, 95%)",
      },

      fontFamily: {
        Manrope: 'Manrope, ui-serif'
      },

      backgroundImage: {
        'header-drawer': "url('/src/assets/images/drawers.jpg')"
      }
    },
  },
  plugins: [],
};
