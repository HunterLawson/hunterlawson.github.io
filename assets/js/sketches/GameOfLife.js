class GameOfLife extends SketchBase {
    constructor() {
        super();
        this.cellSize = 20;
        this.rows = ceil(height / this.cellSize);
        this.cols = ceil(width / this.cellSize);
        this.cells = [];
        for(let i = 0; i < this.rows; i ++) {
            let row = [];
            for(let j = 0; j < this.cols; j ++) {
                let rand = random();
                if(rand < 0.4) {
                    row.push(true);
                } else {
                    row.push(false)
                }
            }
            this.cells.push(row);
        }
        this.update();
    }

    update() {
        this.timer++;
        let newCells = [];
        if(timer % 5 == 0) {
            for(let y = 0; y < this.rows; y ++) {
                let newRow = [];
                for(let x = 0; x < this.cols; x ++) {
                    // y : row
                    // x : column
                    let neighbors = 0
                    let alive = this.cells[y][x];
                    // O O O
                    // O X O
                    // O O O
                    if(y != 0 && x != 0){if(this.cells[y-1][x-1]) neighbors++;}
                    if(y != 0){if(this.cells[y-1][x]) neighbors++;}
                    if(y != 0 && x != this.cols-1){if(this.cells[y-1][x+1]) neighbors++;}
                    if(x != 0){if(this.cells[y][x-1]) neighbors++;}
                    if(x != this.cols-1){if(this.cells[y][x+1]) neighbors++;}
                    if(y != this.rows-1 && x != 0){if(this.cells[y+1][x-1]) neighbors++;}
                    if(y != this.rows-1){if(this.cells[y+1][x]) neighbors++;}
                    if(y != this.rows-1 && x != this.cols-1){if(this.cells[y+1][x+1]) neighbors++;}
    
                    if(alive) {
                        if(neighbors < 2) {
                            alive = false;   
                        }
                        if(neighbors > 3) {
                            alive = false;
                        }
                    } else {
                        if(neighbors == 3) {
                            alive = true;
                        }
                    }
                    newRow.push(alive);
                }
                newCells.push(newRow);
            }
            this.cells = newCells;
        }   
    }

    show() {
        background(17, 17, 17);
        noStroke();
        for(let y = 0; y < this.rows; y ++) {
            for(let x = 0; x < this.cols; x ++) {
                let rectX = this.cellSize * x;
                let rectY = this.cellSize * y;
                fill(17, 17, 17);
                if(this.cells[y][x]) {
                    fill(200);
                }
                rect(rectX, rectY, this.cellSize, this.cellSize);
            }
        }        
    }

    reload() {
        for(let i = 0; i < this.rows; i ++) {
            let row = [];
            for(let j = 0; j < this.cols; j ++) {
                let rand = random();
                if(rand < 0.4) {
                    row.push(true);
                } else {
                    row.push(false)
                }
            }
            this.cells.push(row);
        }
    }
}