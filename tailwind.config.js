const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        primary: [
          "Raleway", ...defaultTheme.fontFamily.sans
        ],
        secondary: [
          "Zilla Slab", "Raleway", ...defaultTheme.fontFamily.sans
        ]
      },
    },
  },
  variants: {},
  plugins: [],
}
