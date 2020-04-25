const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        primary: [
          "Karla", ...defaultTheme.fontFamily.sans
        ],
        secondary: [
          "Raleway", "Karla", ...defaultTheme.fontFamily.sans
        ]
      },
    },
  },
  variants: {},
  plugins: [],
}
