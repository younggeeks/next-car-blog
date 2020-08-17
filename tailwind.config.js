module.exports = {
  purge: [],
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
      },
      fontFamily: {
        lato: "'Lato', sans-serif",
        "pt-sans": "'PT Sans', sans-serif",
      },
    },
  },
  variants: {},
  plugins: [],
};
