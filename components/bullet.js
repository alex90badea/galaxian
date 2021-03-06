function Bullet(x, y) {
    this.x = x;
    this.y = y;
    this.r = 10;
    this.toDelete = false;
    this.speed = 5;

    this.show = function () {
        image(bulletImage, this.x, this.y, this.r, this.r * 2);
    }

    this.destroy = function () {
        this.toDelete = true;
    }

    this.move = function () {
        this.y = this.y - this.speed;
    }
}
