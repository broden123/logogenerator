const svgsite = "http://www.w3.org/2000/svg";
const { square, triangle, circle } = require("./lib/shapes");
const inquirer = require("inquirer");
const fs = require("fs");

fs.writeFile(
  "log.txt",
  function createLogo(shape, shapeColor, text, textColor) {
    let newLogo = document.createElementNS(svgsite, shape);
  }
);
