/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        dentaltheme: {
        
primary: "#0FCFEC",
        
secondary: "#19D3AE",
        
accent: "#3A4256",
        
neutral: "#191D24",
        
 "base-100": "#F6F7FF",
        
 info: "#0FCFEC",
        
// "success": "#36D399",
        
// "warning": "#FBBD23",
        
// "error": "#F87272",
        },
      },
    ],
  },

  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
