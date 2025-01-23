/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      textShadow: {
        s: '0.2px 0.2px 0.4px lightblue',
        sm: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        md: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        lg: '3px 3px 6px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'), // Add this plugin
  ],
}


