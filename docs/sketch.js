let stars = [];
let numStars = 500;
let bird;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < numStars; i++) {
    stars.push(new Star());
  }
  bird = new Bird();
}

function draw() {
  background(0);
  for (let i = 0; i < numStars; i++) {
    stars[i].show();
    stars[i].update();
  }
  bird.show();
  bird.update();
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

class Bird {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.bodySize = 40;
    this.headSize = 30;
    this.wingSize = 20;
    this.tailSize = 20;
    this.speed = 3;
    this.angle = random(0, 2 * PI);
  }

  show() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    noStroke();
    fill(29, 161, 242);

    // body
    ellipse(0, 0, this.bodySize, this.bodySize);

    // head
    ellipse(this.bodySize / 2 - this.headSize / 2, 0, this.headSize, this.headSize);
    fill(255);
    ellipse(this.bodySize / 2 - this.headSize / 2 - this.headSize / 3, 0, this.headSize / 2, this.headSize / 2);

    // wing
    fill(29, 161, 242);
    triangle(
      -this.bodySize / 2 - this.wingSize / 2, 0,
      -this.bodySize / 2 + this.wingSize / 2, 0,
      -this.bodySize / 2, -this.bodySize / 2 + this.wingSize / 2
    );

    // tail
    triangle(
      this.bodySize / 2 - this.tailSize / 2, 0,
      this.bodySize / 2 + this.tailSize / 2, 0,
      this.bodySize / 2, this.bodySize / 2 - this.tailSize / 2
    );
    pop();
  }

  update() {
    this.x += this.speed * cos(this.angle);
    this.y += this.speed * sin(this.angle);
    if (this.x < -this.bodySize) {
      this.x = width + this.bodySize;
      this.y = random(height);
      this.angle = random(-PI / 2, PI / 2);
    } else if (this.x > width + this.bodySize) {
      this.x = -this.bodySize;
      this.y = random(height);
      this.angle = random(-PI / 2, PI / 2);
    } else if (this.y < -this.bodySize) {
      this.x = random(width);
      this.y = height + this.bodySize;
      this.angle = random(0, PI);
    } else if (this.y > height + this.bodySize) {
      this.x = random(width);
      this.y = -this.bodySize;
      this.angle = random(0, PI);
    }
  }
}    
