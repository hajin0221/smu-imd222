// Angry Birds
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/138-angry-birds.html
// https://youtu.be/TDQzoe9nslY
// https://editor.p5js.org/codingtrain/sketches/LbNt1nyxE

var flag_bird_click = false;

class Box {
  constructor(x, y, w, h) {
    const options = {
      restitution: 0.5,
    };
    this.body = Matter.Bodies.rectangle(x, y, w, h, options);
    Matter.World.add(world, this.body);
    this.w = w;
    this.h = h;
  }

  show() {
    const pos = this.body.position;
    const angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill(255);
    rectMode(CENTER);
    imageMode(CENTER);
    image(boxImg, 0, 0, this.w, this.h);
    pop();
  }
}
function mousePressed() {
  let leftX = bird.body.position.x - bird.r;
  let topY = bird.body.position.y - bird.r;
  let rightX = bird.body.position.x + bird.r;
  let bottomY = bird.body.position.y + bird.r;
  if (
    mouseX >= leftX &&
    mouseX < rightX &&
    mouseY >= topY &&
    mouseY < bottomY
  ) {
    flag_bird_click = true;
    slingshot.attach(bird.body);
  }
  if (flag_bird_click) return;

  boxes.push(new Box(mouseX, mouseY, random(70, 80), random(80, 70)));
}
