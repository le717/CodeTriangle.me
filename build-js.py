#! /usr/bin/env python3
# -*- coding: utf-8 -*-
import os
import subprocess


options = ["--compress", "--mangle", "--screw-ie8", "--output"]
outputFile = "codetriangle.min.js"
outputPath = os.path.join(os.getcwd(), "build", "js", outputFile)
exceptions = ["lib/prism.js"]
finalCommand = ["uglifyjs"]

os.chdir("js")

# Get the get the third-party libaries to be minified
for f in os.listdir(os.path.join(os.getcwd(), "lib")):
    f = "lib/{0}".format(f)
    if f not in exceptions and not os.path.isdir(f):
        finalCommand.append(f)

# Get the files to be minified
for f in os.listdir(os.getcwd()):
    if f not in exceptions and f != outputFile and not os.path.isdir(f):
        finalCommand.append(f)

# Add the app options and output file
finalCommand += options
finalCommand.append(outputPath)

print(finalCommand)

# Build the JS file
subprocess.call(finalCommand, shell=True)
print("JS built successfully.")
raise SystemExit(0)
