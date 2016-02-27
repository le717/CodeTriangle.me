/* global process */
"use strict";

const fs   = require("fs"),
      path = require("path"),
      sass = require("node-sass"),

      // Root project directory
      rootDir = process.cwd(),

      // I/O details
      output     = require("./scss-build-details"),
      outputPath = path.join(rootDir, "build", "css", output.details.outputFile);

// Switch to where we keep out scripts
process.chdir(path.join(rootDir, "scss"));

// Compile the SCSS
sass.render({
  file: output.details.inputFile,
  outputStyle: output.details.style,
  indentedSyntax: output.details.indented

}, (err, result) => {
  // There was an error generating the CSS
  if (err) throw new Error(err);
  console.log(result.css);

  // Write it to file
  fs.writeFile(outputPath, result.css, (err) => {
    if (err) {
      console.error("Unable to build CSS.");
      throw new Error(err);
    }

    console.log("CSS built successfully.");
  });
});
