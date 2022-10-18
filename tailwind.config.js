/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {fontFamily:{
    "pt-sans" : ["PT Sans"],
  },
    extend: {
      colors : {
      "bg-color" : "#EEEEEE",
      "bg-color2" : "#3E8ABE",
      "bg-color3" : "#D9D9D9",
      "bg-dark" : "#303030",
      "bg-dark2" : "#181818",
      "text-color" : "#000000",
      "text-color2" : "#EEEEEE",
      },
    },
    daisyui: {
      styled: true,
      themes: true,
      base: true,
      utils: true,
      logs: true,
      rtl: false,
      prefix: "",
      darkTheme: "dark",
    },
  },
  plugins: [require("daisyui")],
}
