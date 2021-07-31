let noiseRadius = 0.3;
let bubbleScreenRatio = 0.4;
let bubbleRadius;
let numBubbles = 5;
let z = 0;

function setup() {
    if(canvasScaleY == 0) {
        var cnv = createCanvas(windowWidth, windowHeight);
    }
    else {
        var cnv = createCanvas(windowWidth, windowHeight * canvasScaleY);
    }

    cnv.position(0, 0);
    cnv.style('z-index', '-1');
    cnv.style('display', 'block');
    background(0);
    noiseDetail(4, .95);
    // Set the size of the bubble relative to the size of the browser window
    reScale();
}

function draw() {
    z += 0.004;
    background(0);
    translate(width / 2, height / 2);
    stroke(255, 200);
    strokeWeight(1.5);
    noFill();
    // Create the bubble using 2D perlin noise
    for(let j = 0; j < numBubbles; j ++) {
        beginShape()
        for(let i = 0; i < TWO_PI; i += 0.01) {
            let x = noiseRadius * cos(i) + 1;
            let y = noiseRadius * sin(i) + 1;
            let n = noise(x, y, z + j / 70);
            n = map(n, 0, 1, 0, bubbleRadius * 0.5);
            n += bubbleRadius * 0.5;
            vertex((n * cos(i)) + (scaleX * cos(i)), (n * sin(i)) + (scaleY * sin(i)));
        }
        endShape(CLOSE);
    }
}

function reScale() {
    if(windowWidth > windowHeight) {
        bubbleRadius = windowHeight * bubbleScreenRatio;
    }
    else if(windowHeight > windowWidth) {
        bubbleRadius = windowWidth * bubbleScreenRatio;
    }
    else {
        bubbleRadius = windowHeight * bubbleScreenRatio;
    }
}

function windowResized() {
    // Make the bubble look nicer if the window is resized
    if(canvasScaleY == 0) {
        resizeCanvas(windowWidth, windowHeight);
    }
    else {
        resizeCanvas(windowWidth, windowHeight * canvasScaleY);
    }
    reScale();
}