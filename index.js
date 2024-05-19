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


function init() {
  const {shape, text} = svgGen;
    
  const response = await inquirer.prompt(questions);

  let svgFile = '';

  if (response.shape) {
    const shape = new shape(response.shape, response.shapeColor);
    svgFile += shape.draw();
  }
  if (response.text) {
    const text = new text(response.text, response.textColor);
    svgFile += text.draw();
  }

  svgFile = '<svg width="300" height="200">${svgFile}<svg>';

  fs.writeFileSync('logo.svg', svgWrite);
  console.log('success');
};


init();