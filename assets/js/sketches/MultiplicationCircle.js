class MultiplicationCircle extends SketchBase{
    constructor() {
        super();
        this.numLines = 150;
        this.radius = 250;
        this.mult = random(2, 5);
    }

    update() {
        this.mult += 0.0015;
    }

    show() {
        background(240);
        stroke(29);
        noFill();
        translate(width/2, height/2);
        strokeWeight(1);
        ellipse(0, 0, this.radius * 2, this.radius * 2);
        strokeWeight(0.7);
        for(let i = 0; i < TWO_PI; i += TWO_PI / this.numLines) {
            /* function */
            let num = i * this.mult;
            num -= 1;
            let x = this.radius * cos(num);
            let y = this.radius * sin(num);
            line(this.radius * cos(i), this.radius * sin(i), x, y);
        }
    }

    reload() {

    }
}