/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          warmWhite: '#F8F9F7',
          ivory: '#FCFBF8',
          deepNavy: '#102A43',
          slate: '#52606D',
          copper: '#B76E41',
          copperDark: '#93542E',
          softBlue: '#DCEAF2',
          lightGrey: '#EEF1F3',
          borderGrey: '#E2E8F0',
          blueAccent: '#0284C7',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(16, 42, 67, 0.08)',
        'elevated': '0 20px 40px -15px rgba(16, 42, 67, 0.12)',
      },
    },
  },
  plugins: [],
};
