// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.no-scrollbar': {
          'scrollbar-width': 'none',
        },
      }, { variants: ['responsive'] });
    }
  ],
};
