
    
class Shape {
    constructor(type, color) {
        this.type = type;
        this.color = color;

    };
        

     draw() {

        if (this.type === 'Circle') {
            return `<circle cx="25" cy="75" r="20" stroke="${this.color}" fill="${this.color}" stroke-width="5"/>`;
        } else if (this.type === 'Oval') {
            return `<ellipse cx="75" cy="75" rx="20" ry="5" stroke="${this.color}" fill="${this.color}" stroke-width="5"/>`;
        } else if (this.type === 'Square') {
            return `<rect x="10" y="10" width="30" height="30" stroke="${this.color}" fill="${this.color}" stroke-width="5"/>`
        } else if (this.type === 'Rectangle') {
            return `<rect x="10" y="10" width="60" height="30" stroke="${this.color}" fill="${this.color}" stroke-width="5"/>`;
        } else if (this.type === 'Triangle') {
            return `<polygon points="150, 18 244, 182 56, 182" stroke="${this.color}" fill="${this.color}" stroke-width="5"/>`;
        };
    };
};
    
class Text {
    constructor(text, color) {
        this.text = text;
        this.color = color;
    };

    draw() {
        return `<text x="0" y="10" font-family="Verdana" font-size="55" fill="${this.color}"> ${this.text} </text>`;
    };
        
}

console.log(Shape);
console.log(Text);


module.exports = {Shape, Text};