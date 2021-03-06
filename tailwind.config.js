module.exports = {
  purge: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      minWidth: {
        smallest: "272px",
      },
      screens: {
        "ipad-pro": { min: "1023px", max: "1024px" },
        xs: { min: "270px", max: "640px" },
      },
      height: {
        header: "90px",
        longCard: "400px",
        "88": "22rem",
      },
      fontFamily: {
        lato: "'Lato', sans-serif",
        "pt-sans": "'PT Sans', sans-serif",
      },
      inset: {
        "-5": "-85px",
        newsletter: "35vh",
      },
    },
  },
  variants: {},
  plugins: [],
};
