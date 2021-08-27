class FlowField extends SketchBase {
    constructor() {
        super();
        this.particleCount = 1000;
        this.particles = [];
        this.noiseScale = 200;
        this.z = 0;
        for(let i = 0; i < this.particleCount; i ++) {
            let x = random(width);
            let y = random(height);
            this.particles.push(createVector(x, y));
        }
        noiseDetail(8, 0.1);
    }

    update() {
        this.z += 0.001;
    }

    show() {
        background(17, 17, 17);
        
        angleMode(RADIANS);
        strokeWeight(3);
        stroke(255, 255, 255, 80);
        for(let i = 0; i < this.particleCount; i ++) {
            let n = noise(this.particles[i].x / this.noiseScale,
                          this.particles[i].y / this.noiseScale, this.z);
            let angle = map(n, 0, 1, -TWO_PI, TWO_PI);
            let dir = p5.Vector.fromAngle(angle).mult(2);
            this.particles[i].add(dir);
            point(this.particles[i].x, this.particles[i].y);
        }
    }

    reload() {
        noiseDetail(8, 0.1);
        this.particles = [];
        this.z = random(20);
        for(let i = 0; i < this.particleCount; i ++) {
            let x = random(width);
            let y = random(height);
            this.particles.push(createVector(x, y));
        }
    }
}