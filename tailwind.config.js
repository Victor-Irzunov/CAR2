/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
      },
    },
    container: {
     
      center:true,
    },
    screens: {
      xy: "373px",
      xx: "414px",
      xs: "480px",
      xm: "575px",
      ss: "620px",
      sm: "768px",
      sd: "991px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};


