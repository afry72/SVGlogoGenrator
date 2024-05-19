const inquirer = require('inquirer');
const fs = require('fs');
const svgGen = require('./lib/shapes');
 

const questions = [
    {
      type: 'input',
      message: 'What letters will be in the logo (3 letters maximum)',
      name: 'text',
    },
    {
      type: 'list',
      message: 'What Color will that text be',
      name: 'textColor',
      choices: [
        "Red",
        "Blue",
        "Yellow",
        "Orange",
        "Purple",
        "Green",
        ],
    },
    {
        type: 'list',
        message: 'What shape will the logo be',
        name: 'shape',
        choices: [
          "Circle",
          "Square",
          "Triangle",
          "Rectangle",
          "Oval",
          "Hexagon",
          ],
    },
    {
      type: 'list',
      message: 'What Color will the shape of the logo be',
      name: 'shapeColor',
      choices: [
        "Red",
        "Blue",
        "Yellow",
        "Orange",
        "Purple",
        "Green",
        ],
    },
];

/* function generateLogo(filename, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Logo Generated'))
}; */

function init() {
    inquirer.prompt(questions)
    .then((response) => {
        //generateLogo("logo.svg", svgGen(response));
        //console.log(response);
        svgGen(response);
        }
    );
};

init();