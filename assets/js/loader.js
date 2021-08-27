var sketches = [];
var sketch;
var timer = 0;
var sketchTimeout = 400;
var transition = 0;

function setup() {
    // for some reason the height is always around 100 pixels shorter?? add 100
    let div = document.getElementById('canvas-container');
    let canvas = createCanvas(div.offsetWidth, div.offsetHeight + 100);
    canvas.parent('canvas-container');
    // Add all sketches to the sketches array
    sketches.push(new Bubble());
    sketches.push(new MaurerRose());
    sketches.push(new FlowField());
    sketches.push(new GameOfLife());
    // Randomly pick one to use
    sketch = random(sketches);
    sketch.reload();

    cursor(CROSS);
    frameRate(60);
}

function draw() {
    timer ++;
    if(timer >= sketchTimeout) {
        timer = 0;
        transition = 1;
    }
    switch(transition) {
        case 0:
            sketch.update();
            sketch.show();
            break;
        case 1:
            sketch.update();
            sketch.show();
            background(17, 17, 17, timer);
            if(timer >= 255) {
                timer = 0;
                transition = 2;
                // Switch to new sketch
                previousSketch = sketch;
                do {
                    sketch = random(sketches);
                } while(sketch == previousSketch);
                sketch.reload();
            }
            break;
        case 2:
            sketch.update();
            sketch.show();
            background(17, 17, 17, 255 - timer);
            if(timer >= 255) {
                timer = 0;
                transition = 0;
            }
            break;
    }
}

function windowResized() {
    let div = document.getElementById('canvas-container');
    resizeCanvas(div.offsetWidth, div.offsetHeight);
}