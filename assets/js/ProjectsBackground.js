var color1 = 150;
var color2 = 220;

function setup() {
    let div = document.getElementById('canvas-container');
    let canvas = createCanvas(div.offsetWidth, div.offsetHeight);
    canvas.parent('canvas-container');
    canvas.style('position', 'absolute');
    canvas.style('z-index', '-1');
    
    var triangleSize = 80;

    noStroke();
    for(let y = 0; y < height; y += triangleSize) {
        for(let x = 0; x < width; x += triangleSize) {
            if(random() < 0.5) {
                fill(randomColor());
                triangle(x, y, x, y + triangleSize, x + triangleSize, y + triangleSize);
                fill(randomColor());
                triangle(x, y, x + triangleSize, y, x + triangleSize, y + triangleSize);
            }
            else {
                fill(randomColor());
                triangle(x, y, x + triangleSize, y, x, y + triangleSize);
                fill(randomColor());
                triangle(x, y + triangleSize, x + triangleSize, y + triangleSize, x + triangleSize, y);
            }
        }
    }
}

function randomColor() {
    return color(random(color1, color2));
}