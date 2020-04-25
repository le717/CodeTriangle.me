const process = require("process");
const tailwindcss = require("tailwindcss");
const css_import = require("postcss-import");
const autoprefixer = require("autoprefixer");
const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./**/*.html"],
  css: ["css/**/*.css"],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});
const cssnano = require("cssnano")({
  preset: "default"
});

module.exports = {
  plugins: [
    css_import,
    tailwindcss,
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
    autoprefixer,
    ...(process.env.NODE_ENV === "production" ? [cssnano] : []),
  ]
}