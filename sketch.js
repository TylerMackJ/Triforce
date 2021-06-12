function setup() {
  createCanvas(windowWidth, windowHeight);
}

oldX = 200
oldY = 200

function draw() {
  p = random([0, 1, 2])
  vertexX = 0
  vertexY = 0
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
