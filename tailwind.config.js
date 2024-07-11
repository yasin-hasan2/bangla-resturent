/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'logInCover': "url('/src/assets/img/others/authentication.png')",
      }
    }
  },
  plugins: [require("daisyui")],
}

