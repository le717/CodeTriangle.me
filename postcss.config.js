const process = require("process");
const tailwindcss = require("tailwindcss");
const css_import = require("postcss-import");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano")({
  preset: "default"
});

module.exports = {
  plugins: [
    css_import,
    tailwindcss,
    autoprefixer,
    ...(process.env.NODE_ENV === "production" ? [cssnano] : []),
  ]
}
