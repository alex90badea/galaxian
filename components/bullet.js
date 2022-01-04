function Bullet(x, y) {
    this.x = x;
    this.y = y;
    this.r = 10;
    this.toDelete = false;

    this.show = function () {
        if (debug) {
            noFill();
            stroke(255);
            rect(this.x - this.r / 2, this.y - this.r / 2, this.r, this.r);
        }
        fill(255);
        image(bulletImage, this.x, this.y, this.r, this.r * 2);
    }

    this.destroy = function () {
        this.toDelete = true;
    }

    this.move = function () {
        this.y = this.y - 5;
    }

}
