function Bomb(x, y) {
    this.x = x;
    this.y = y;
    this.r = 90;
    this.speed = 15;

    this.show = function () {
        image(bulletImage, this.x, this.y, this.r, this.r * 2);
    }

    this.move = function () {
        this.y = this.y - this.speed;
    }
}
