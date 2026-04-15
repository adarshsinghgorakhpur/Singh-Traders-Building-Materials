 /** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        slideBounceLeft: "slideBounceLeft 1s ease-out",
      },
      keyframes: {
        slideBounceLeft: {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0",
          },
          "60%": {
            transform: "translateX(10%)",
            opacity: "1",
          },
          "80%": {
            transform: "translateX(-5%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
      },
    },
  },
  plugins: [],
};