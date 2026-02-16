/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lol-gold': '#C8AA6E',
        'lol-gold-dark': '#A98A54',
        'lol-blue': '#0AC8B9',
        'lol-dark': '#010A13',
        'lol-dark-2': '#0A1428',
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  }
}
