/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'tab': {
          raw: '(min-height:1000px) and (max-width:1024px)'
        },
        'mob': {
          raw: '(max-height:1000px) and (max-width:576px)'
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        "yellow":"#e0fd60",
        "black":"#121212",
        "grey":"#ffffffd0",
        "white":"#F1F1F1"
      }
    },
  },
  plugins: [],
};
