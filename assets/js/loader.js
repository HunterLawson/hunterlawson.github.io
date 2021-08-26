var sketches = [];
var sketch;
var timer = 0;
var sketchTimeout = 600;
var transition = 0;

function setup() {
    // for some reason the height is always around 100 pixels shorter?? add 100
    let div = document.getElementById('canvas-container');
    let canvas = createCanvas(div.offsetWidth, div.offsetHeight + 100);
    canvas.parent('canvas-container');
    // Add all sketches to the sketches array
    sketches.push(new Bubble());
    // Randomly pick one to use
    sketch = random(sketches);
    frameRate(60);
}

function draw() {
    timer ++;
    background(17, 17, 17);
    if(timer >= sketchTimeout) {
        timer = 0;
        transition = 1;
    }
    if(transition == 1) {
        sketch.update();
        sketch.show();
        background(17, 17, 17, timer);
        if(timer >= 255) {
            timer = 0;
            transition = 2;
            // Switch to new sketch
            sketch = random(sketches);
        }
    } 
    else if(transition == 2) {
        sketch.update();
        sketch.show();
        background(17, 17, 17, 255 - timer);
        if(timer >= 255) {
            timer = 0;
            transition = 0;
        }
    } else {
        sketch.update();
        sketch.show();
    }
}

function windowResized() {
    let div = document.getElementById('canvas-container');
    resizeCanvas(div.offsetWidth, div.offsetHeight);
    sketch.resized();
}