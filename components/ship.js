function Ship() {

    this.w = 112;
    this.h = 120;
    this.x = width / 2;
    this.y = height - this.h / 2 - 10;
    this.xdir = 0;
    this.r = this.h;

    this.show = function () {

        imageMode(CENTER);
        let w = this.w;
        // tilt ship when moving
        if (this.xdir !== 0) {
            w -= 10;
        }
        image(shipImage, this.x, this.y, w, this.h);

        // draw bomb ammo
        if (bomb === undefined) {
            fill('#d62f11');

            let fireX = 41;
            if (this.xdir !== 0) {
                fireX = 38;
            }

            ellipse(this.x - fireX, this.y - this.h / 2, 14, 14);
            ellipse(this.x + fireX, this.y - this.h / 2, 14, 14);
        }

    }

    this.checkEdge = function () {
        return (((this.x + this.xdir * 5) - this.w / 2 < 0) || ((this.x + this.xdir * 5) + this.w / 2 > width));
    }

    this.setDir = function (dir) {
        this.xdir = dir;
    }

    this.move = function () {
        if (!this.checkEdge()) {
            this.x += this.xdir * 5;
        }
    }

}
