const svgsite = "http://www.w3.org/2000/svg";
const { Square, Triangle, Circle } = require("./lib/shapes");
const inquirer = require("inquirer");
const fs = require("fs");

function createLogo() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter logo text (3 letters max)",
        name: "text",
      },
      {
        type: "input",
        message: "Choose text color",
        name: "textColor",
      },
      {
        type: "list",
        message: "Shape of logo?",
        choices: ["Square", "Triangle", "Circle"],
        name: "shape",
      },
      {
        type: "input",
        message: "Choose shape color",
        name: "shapeColor",
      },
    ])
    .then((answers) => {
      if (answers.text.length > 3) {
        console.log("Max text length is 3 characters");
        createLogo();
      } else {
        writeFile("logo.svg", answers);
      }
    });
}

function writeFile(fileName, answers) {
  let svgString = "";
  svgString = `<svg version="1.1" width="300" height="200" xmlns="${svgsite}">`;
  svgString += "<g>";
  svgString += `${answers.shape}`;
  let shapeChoice;

  if (answers.shape === "Square") {
    shapeChoice = new Square();
    svgString += `<rect x="70" y="40" width="150" height="150" fill="${answers.shapeColor}"/>`;
  } else if (answers.shape === "Triangle") {
    shapeChoice = new Triangle();
    svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColor}"/>`;
  } else {
    shapeChoice = new Circle();
    svgString += `<circle cx="150" cy="120" r="75" fill="${answers.shapeColor}"/>`;
  }

  svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
  svgString += "</g>";
  svgString += "</svg>";

  fs.writeFile(fileName, svgString, (err) => {
    err ? console.log(err) : console.log("Generated logo logo");
  });
}

//init
createLogo();
