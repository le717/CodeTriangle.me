const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["*.html", "css/**/*.css"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        primary: ["Karla", ...defaultTheme.fontFamily.sans],
        secondary: ["Raleway", "Karla", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
};
