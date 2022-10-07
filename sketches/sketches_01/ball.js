// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Example 1-2: Bouncing Ball, with p5.Vector!

class Ball {
  constructor() {
    this.position = new createVector(width / 2, height / 2);
    this.velocity = new createVector(0, 10);
    this.velocity.rotate(random(0, 360));
  }

  update() {
    // Add the current speed to the position.
    this.position.add(this.velocity);
    if (this.position.x > width - C / 2 || this.position.x < C / 2) {
      this.velocity.x = this.velocity.x * -1;
    }
    if (this.position.y > height - C / 2 || this.position.y < C / 2) {
      this.velocity.y = this.velocity.y * -1;
    }
  }
  display() {
    // Display circle at x position
    stroke(0);
    fill(255, 0, 255);
    circle(this.position.x, this.position.y, C);
    line(
      this.position.x,
      this.position.y,
      this.position.x + this.velocity.x,
      this.position.y + this.velocity.y
    );
  }
}
