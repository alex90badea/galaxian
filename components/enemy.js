function Enemy(x, y, hp) {
  this.x = x;
  this.y = y;
  this.initialY = y;
  this.r = 50;
  this.hp = hp;

  this.xdir = 1;

  this.getsHit = function() {
    this.hp--;
  }

  this.shiftDown = function() {
    this.xdir *= -1;
    this.y += this.r;
  }

  this.resetPosition = function() {
    this.y = this.initialY;
  }

  this.move = function() {
    this.x = this.x + this.xdir * 2;
  }

  this.show = function() {
    if (debug) {
      noFill();
      stroke(255);
      rect(this.x - this.r / 2, this.y - this.r / 2, this.r, this.r);
    }

    image(enemyImage, this.x, this.y, this.r, this.r, (this.hp - 1) * 57, 0, 57, 50);

    for (let i = 0; i < this.hp; i++) {
      push();
      translate(this.x - 20, this.y - this.r/2);
      fill(255);
      rect(i * 10, 0, 3, 10);
      pop();

    }

  }

}
