/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          
"primary": "#3400ff",
          
"secondary": "#4000ff",
          
"accent": "#009de5",
          
"neutral": "#030706",
          
"base-100": "#fcfcf5",
          
"info": "#00b1ff",
          
"success": "#008400",
          
"warning": "#ffaf00",
          
"error": "#f4595b",
          },
        },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
};
