
function svgGen (response) {
    console.log("generate", response);

    var red = "#dc143c";
    var blue = "#1e90ff";
    var green = "#006400";
    var orange = "#ff8c00";
    var yellow = "#daa520";
    var purple = "#8b008b";

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

    if (response.textColor === 'red') {
        var givenTextColor = red;
    } else if (response.textColor === 'blue') {
        var givenTextColor = blue;
    } else if (response.textColor === 'green') {
        var givenTextColor = green;
    } else if (response.textColor === 'orange') {
        var givenTextColor = orange;
    } else if (response.textColor === 'yellow') {
        var givenTextColor = yellow;
    } else if (response.textColor === 'purple') {
        var givenTextColor = purple;
    };
    


    class shape {
        constructor(svg, type, color) {
            this.svg = SVGFile;
            this.type = response.shape;
            this.color = givenShapeColor;

        };
        

        draw() {

            if (this.type === 'Circle') {
                svgFile = '<circle cx="25" cy="75" r="20" stroke="${this.color}" fill="${this.color}" stroke-width="5"/>';
            } else if (this.type === 'Oval') {
                svgFile = '<ellipse cx="75" cy="75" rx="20" ry="5" stroke="${this.color}" fill="${this.color}" stroke-width="5"/>';
            } else if (this.type === 'Square') {
                svgFile = '<rect x="10" y="10" width="30" height="30" stroke="${this.color}" fill="${this.color}" stroke-width="5"/>'
            } else if (this.type === 'Rectangle') {
                svgFile = '<rect x="10" y="10" width="60" height="30" stroke="${this.color}" fill="${this.color}" stroke-width="5"/>';
            } else if (this.type === 'Triangle') {
                svgFile = '<polygon points="150, 18 244, 182 56, 182" stroke="${this.color}" fill="${this.color}" stroke-width="5"/>';
            };

            console.log(this.shape);
            console.log(this.color);
        };
    };
    
    class text {
        constructor(svg, text, color) {
            this.svg = SVGFile;
            this.text = response.text;
            this.color = givenTextColor
        }

        draw() {
            this.svg.text(this.text).fill(this.color).move(50, 50)
        }
        
    }

    console.log(shape);
    console.log(text);
};

module.exports = svgGen;