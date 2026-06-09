/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        rose:    '#F8C8D4',
        gold:    '#D4AF37',
        cream:   '#FFF9F9',
        charcoal:'#2D2D2D',
        mauve:   '#C4818A',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
