const inquirer = require('inquirer');
const fs = require('fs');
const {Shape, Text} = require('./lib/shapes');
 

const questions = [
    {
      type: 'input',
      message: 'What letters will be in the logo (3 letters maximum)',
      name: 'text',
    },
    {
      type: 'input',
      message: 'What Color will that text be',
      name: 'textColor',
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
      type: 'input',
      message: 'What Color will the shape of the logo be',
      name: 'shapeColor',
    },
];


function init() {
    inquirer.prompt(questions)
    .then((response) => {
      console.log(response);
        var text = new Text(response.text, response.textColor);
        console.log(text);
        switch (response.shape) {
          case "Triangle":
            var shape = new Shape(response.shape, response.shapeColor);
            console.log(shape);
            break;
        };

        
        var textString = text.draw();
        var shapeString = shape.draw();
        console.log(`<svg width="300" height="200">${shapeString}${textString}</svg>`);

        var svg = `<svg width="300" height="200">${shapeString}${textString}</svg>`;

        fs.writeFile("logo.svg", svg, (error) => {
          if (error) throw error;
        });

        }
    );
};

init();