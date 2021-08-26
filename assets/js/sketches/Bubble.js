class Bubble extends SketchBase {
    constructor() {
        super();
        this.noiseRadius = 0.5;
        this.bubbleScreenRatio = 0.25;
        this.bubbleRadius = 0;
        this.numBubbles = 5;
        this.z = 0;
        noiseDetail(4, 0.8);

        if(windowWidth > windowHeight) {
            this.bubbleRadius = windowHeight * this.bubbleScreenRatio;
        }
        else if(windowHeight > windowWidth) {
            this.bubbleRadius = windowWidth * this.bubbleScreenRatio;
        }
        else {
            this.bubbleRadius = windowHeight * this.bubbleScreenRatio;
        }
    }

    update() {
        this.z += 0.004;
    }

    show() {
        translate(width / 2, height / 2);
        stroke(255, 200);
        strokeWeight(1.5);
        noFill();
        for(let j = 0; j < this.numBubbles; j ++) {
            beginShape()
            for(let i = 0; i < TWO_PI; i += 0.01) {
                let x = this.noiseRadius * cos(i) + 1;
                let y = this.noiseRadius * sin(i) + 1;
                let n = noise(x, y, this.z + j / 70);
                n = map(n, 0, 1, this.bubbleRadius / 2, this.bubbleRadius);
                n += this.bubbleRadius / 2;
                vertex(n * cos(i), n * sin(i));
            }
            endShape(CLOSE);
        }
    }

    resized() {
        if(windowWidth > windowHeight) {
            this.bubbleRadius = windowHeight * this.bubbleScreenRatio;
        }
        else if(windowHeight > windowWidth) {
            this.bubbleRadius = windowWidth * this.bubbleScreenRatio;
        }
        else {
            this.bubbleRadius = windowHeight * this.bubbleScreenRatio;
        }
    }
}