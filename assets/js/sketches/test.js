var div = document.getElementById('canvas-container');
var x, y;
var xSpeed, ySpeed;

function setup() {
    // for some reason the height is always around 100 pixels shorter?? add 100
    var canvas = createCanvas(div.offsetWidth, div.offsetHeight + 100);
    canvas.parent('canvas-container');
    x = width/2;
    y = height/2;
    xSpeed = random(-10, 10);
    ySpeed = random(-10, 10);
}

function draw() {
    background(0);
    x += xSpeed;
    y += ySpeed;
    if(x + 50 >= width || x - 50 <= 0) {
        xSpeed *= -1;
    }
    if(y + 50 >= height || y - 50 <= 0) {
        ySpeed *= -1;
    }
    ellipse(x, y, 100, 100);
}

function windowResized() {
    div = document.getElementById('canvas-container');
    resizeCanvas(div.offsetWidth, div.offsetHeight);
}