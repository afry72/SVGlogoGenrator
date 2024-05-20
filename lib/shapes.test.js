if (response.shapeColor === 'red') {
    var givenShapeColor = red;
} else if (response.shapeColor === 'blue') {
    var givenShapeColor = blue;
} else if (response.shapeColor === 'green') {
    var givenShapeColor = green;
} else if (response.shapeColor === 'orange') {
    var givenShapeColor = orange;
} else if (response.shapeColor === 'yellow') {
    var givenShapeColor = yellow;
} else if (response.shapeColor === 'purple') {
    var givenShapeColor = purple;
};

if (response.shapeColor === 'red') {
    var givenShapeColor = red;
} else if (response.shapeColor === 'blue') {
    var givenShapeColor = blue;
} else if (response.shapeColor === 'green') {
    var givenShapeColor = green;
} else if (response.shapeColor === 'orange') {
    var givenShapeColor = orange;
} else if (response.shapeColor === 'yellow') {
    var givenShapeColor = yellow;
} else if (response.shapeColor === 'purple') {
    var givenShapeColor = purple;
};

//put in a color if else to set givenColor var

const SVGFile = SVG();

if (response.shape === 'Circle') {
    SVGFile.circle(100).fill(givenShapeColor).move(50, 50);
} else if (response.shape === 'Oval') {
    SVGFile.ellipse(150, 100).fill(givenShapeColor).move(20, 50);
} else if (response.shape === 'Square') {
    SVGFile.rect(100, 100).fill(givenShapeColor).move(50,50)
} else if (response.shape === 'Rectangle') {
    SVGFile.rect(150, 100).fill(givenShapeColor).move(25,50)
} else if (response.shape === 'Triangle') {
    SVGFile.polygon('50,0 100,100 0,100').fill(givenShapeColor).move(50,50)
} else if (response.shape === 'Hexagon') {
    SVGFile.polygon('50, 0 100,0 150,50 100,100 50,100 0,50').fill(givenShapeColor).move(25,25)
};

function writeSVG(svgGen) {

    const shape = new shape(svg, response.shape, response.shapeColor);
    shape.draw();
    const text = new text(svg, responce.text, response.textColor);
    text.draw();
    const svgWrite = svg.svg;
  
    fs.writeFileSync('logo.svg', svgWrite);
    console.log('success')
  
  }

  function init() {
    const {shape, text} = svgGen;
     inquirer.prompt(questions)
     .then((response) => {
         //svgGen(response);
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
 
         }
     );
 };
