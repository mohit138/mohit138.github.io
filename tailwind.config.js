/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        dropShadow: {
          glow: [
            "1px 1px 1px rgba(255,255, 255, .7)",
            "0px 0px 1px rgba(25, 255,255, 0.4)"
          ]
        }
      },
    },
    plugins: [],
  }