/** @type {import('tailwindcss').Config} */

import colors from "./src/util/objects/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: colors,
    fontSize:{
      menu:'18px',
      title:'30px',
    },
    fontFamily:{
      menu:['poppins-regular'],
      title:['poppins-regular'],
    },
    extend: {},
  },
  plugins: [],
};
