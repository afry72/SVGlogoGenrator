
function svgGen (response) {
    console.log("generate", response);

    var red = "#dc143c";
    var blue = "#1e90ff";
    var green = "#006400";
    var orange = "#ff8c00";
    var yellow = "#daa520";
    var purple = "#8b008b";

    class shape {
        constructor(svg, type, color) {
            this.svg = SVGFile;
            this.type = response.shape;
            this.color = response.shapeColor;

        };
        

        setShapeSVG() {

            if (this.color === 'red') {
                var givenShapeColor = red;
            } else if (this.color === 'blue') {
                var givenShapeColor = blue;
            } else if (this.color === 'green') {
                var givenShapeColor = green;
            } else if (this.color === 'orange') {
                var givenShapeColor = orange;
            } else if (this.color === 'yellow') {
                var givenShapeColor = yellow;
            } else if (this.color === 'purple') {
                var givenShapeColor = purple;
            };

            if (this.type === 'Circle') {
                SVGFile.circle(100).fill(givenShapeColor).move(50, 50);
            } else if (this.type === 'Oval') {
                SVGFile.ellipse(150, 100).fill(givenShapeColor).move(20, 50);
            } else if (this.type === 'Square') {
                SVGFile.rect(100, 100).fill(givenShapeColor).move(50,50)
            } else if (this.type === 'Rectangle') {
                SVGFile.rect(150, 100).fill(givenShapeColor).move(25,50)
            } else if (this.type === 'Triangle') {
                SVGFile.polygon('50,0 100,100 0,100').fill(givenShapeColor).move(50,50)
            } else if (this.type === 'Hexagon') {
                SVGFile.polygon('50, 0 100,0 150,50 100,100 50,100 0,50').fill(givenShapeColor).move(25,25)
            };
        };
    };



};

module.exports = svgGen;