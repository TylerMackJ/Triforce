function setup() {
  // h = a * √3 / 2
  let w = windowWidth;
  let h = w * Math.sqrt(3) / 2;
  if (h > windowHeight) {
    h = windowHeight;
    w = h / (Math.sqrt(3) / 2);
  }
  createCanvas(w, h);
  background(color(75, 74, 103));
  fill(color(221, 209, 199));
  strokeWeight(0);
}

function draw() {
  step();
  step();
  step();
  step();
  step();
}

let oldX = 200
let oldY = 200

function step() {
  let p = random([0, 1, 2])
  let vertexX = 0
  let vertexY = 0
  if (p == 0) {
    vertexX = width / 2.0
    vertexY = 0
  } else if (p == 1) {
    vertexX = width
    vertexY = height
  } else {
    vertexX = 0
    vertexY = height
  }
  circle(oldX, oldY, 1)
  oldX = (oldX + vertexX) / 2.0
  oldY = (oldY + vertexY) / 2.0
}
