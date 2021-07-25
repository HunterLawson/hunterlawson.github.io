let noiseRadius = 0.3;
let bubbleScreenRatio = 0.4;
let bubbleRadius;
let numBubbles = 5;
let z = 0;

function setup() {
    var cnv = createCanvas(windowWidth, windowHeight);
    cnv.style('display', 'block');
    background(0);
    noiseDetail(4, .95);
    if(width > height) {
        bubbleRadius = height * bubbleScreenRatio;
    }
    else if(height > width) {
        bubbleRadius = width * bubbleScreenRatio;
    }
    else {
        bubbleRadius = height * bubbleScreenRatio;
    }
}

function draw() {
    z += 0.004;
    background(0);
    translate(width / 2, height / 2);
    stroke(255);
    strokeWeight(1.5);
    noFill();
    for(let j = 0; j < numBubbles; j ++) {
        beginShape()
        for(let i = 0; i < TWO_PI; i += 0.01) {
            let x = noiseRadius * cos(i) + 1;
            let y = noiseRadius * sin(i) + 1;
            let n = noise(x, y, z + j / 70);
            n = map(n, 0, 1, 0, bubbleRadius * 0.5);
            n += bubbleRadius * 0.5;
            vertex(n * cos(i), n * sin(i));
        }
        endShape();
    }

    strokeWeight(0);
    fill(255);
    textAlign(CENTER, CENTER);
    textFont();
    textSize(bubbleRadius / 15);
    text('H U N T E R     L A W S O N', 0, 0);
}

function windowResized() {
    // Make the bubble look nicer if the window is resized
    resizeCanvas(windowWidth, windowHeight);
    if(width > height) {
        bubbleRadius = height * bubbleScreenRatio;
    }
    else if(height > width) {
        bubbleRadius = width * bubbleScreenRatio;
    }
    else {
        bubbleRadius = height * bubbleScreenRatio;
    }
}