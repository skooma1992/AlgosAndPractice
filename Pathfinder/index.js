let cols = 5;
let rows = 5;
let grid = new Array(cols)

let openSet = [];
let closedSet = [];
let start;
let end;

function Spot(){
  this.f = 0;
  this.g = 0;
  this.h = 0;
}

function setup() {
  createCanvas(400, 400);
  console.log('A*')
}

for (let i = 0; i < cols; i++){
    for (let j = 0; j < rows; i++){
  grid[i][j] = new Spot()
}
}

console.log(grid)
 
function draw(){
  background(0);
}