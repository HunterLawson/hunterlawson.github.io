class MaurerRose extends SketchBase {
    constructor() {
        super();
        this.d = random(100);
        this.n = random(100);
    }

    update() {
        this.n += 0.00001;
        this.z += 0.00001;
    }

    show() {
        background(17, 17, 17);
        
        angleMode(DEGREES);
        translate(width/2, height/2);
        scale(30);
        noFill();
        stroke(255);
        strokeWeight(0.03);

        beginShape();
        for(let i = 0; i < 361; i ++) {
            let k = i * this.d;
            let r = 9 * sin(this.n * k);
            let x = r * cos(k);
            let y = r * sin(k);
            vertex(x, y);
        }
        endShape(CLOSE);
    }

    reload() {
        this.d = random(100);
        this.n = random(100);
    }
}