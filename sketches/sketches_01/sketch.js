// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Example 1-2: Bouncing Ball, with p5.Vector!

let b;

function setup() {
  createCanvas(640, 360);
  b = new Ball();
  C = 80;
}

function draw() {
  background(51);
  b.update();
  b.display();
}
