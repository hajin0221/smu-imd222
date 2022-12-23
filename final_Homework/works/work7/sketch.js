// 이 클래스는 전체 구조와 사각형의 움직임을
// 표현합니다.
class Brick {
  constructor(bc, y) {
    this.brickColor = bc;
    this.yPos = y;
    this.xPos = 0;
  }

  // 이 함수로 사각형 생성하기
  createBrick() {
    fill(this.brickColor);
    rect(this.xPos, this.yPos, 100, 50);
  }

  // 이 함수로 사각형의 움직임을
  // 1로 설정하기
  setSpeed() {
    this.xSpeed = 1;
  }

  // 이 함수로 사각형을 움직이기
  moveBrick() {
    this.xPos += this.xSpeed;
    if (this.xPos + 100 >= width || this.xPos <= 0) {
      this.xSpeed *= -1;
    }
  }
}

function setup() {
  let boundingRects = document
    .getElementById('p5Canvas')
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent('p5Canvas');
  createP('Keep the mouse clicked').style('color', '#ffffff');
  createP('to check whether the bricks').style('color', '#ffffff');
  createP('are moving at same speed or not').style('color', '#ffffff');
}

// 두 개의 사각형을 각각
// 흰색과 검정색으로 지정
let brick1 = new Brick('white', 100);
let brick2 = new Brick('black', 250);

//
brick1.setSpeed();
brick2.setSpeed();

function draw() {
  background(0);
  if (mouseIsPressed) {
    background(50);
  }
  brick1.createBrick();
  brick1.moveBrick();
  if (!mouseIsPressed) {
    createBars();
  }
  brick2.createBrick();
  brick2.moveBrick();
}

// 이 함수로 화면에
// 검정색 및 흰색 막대기들을 생성하기
function createBars() {
  let len = 12;
  for (let i = 0; i < width / len; i++) {
    fill('white');
    if (i % 2 == 0) rect(i * len, height, len, -height);
  }
}
