const inquirer = require('inquirer');
const fs = require('fs');
 

const questions = [
    {
      type: 'input',
      message: 'What letters will be in the logo (3 letters maximum)',
      name: 'initial',
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
      message: 'What Color will your logo be',
      name: 'license',
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



function init() {
    inquirer.prompt(questions);
}

init();