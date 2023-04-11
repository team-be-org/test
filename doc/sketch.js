let stars = [];
let numStars = 500;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < numStars; i++) {
    stars.push(new Star());
  }
}

function draw() {
  background(0);
  for (let i = 0; i < numStars; i++) {
    stars[i].show();
    stars[i].update();
  }
}

class Star {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(1, 4);
    this.opacity = random(50, 200);
    this.speed = random(1, 4);
  }

  show() {
    noStroke();
    fill(255, 255, 255, this.opacity);
    ellipse(this.x, this.y, this.size, this.size);
  }

  update() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
    if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
      this.x = random(width);
      this.y = random(height);
    }
  }
}
