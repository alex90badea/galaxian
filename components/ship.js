function Ship() {
    this.w = 112;
    this.h = 120;
    this.x = width / 2;
    this.y = height - this.h / 2 - 10;
    this.xdir = 0;
    this.r = this.h;

    this.show = function () {
        if (debug) {
            noFill();
            stroke(255);
            rect(this.x - this.w / 2, this.y - this.h / 2, this.w, this.h);
        }
        imageMode(CENTER);
        let w = this.w;
        if (this.xdir !== 0) {
            w -= 10;
        }
        image(shipImage, this.x, this.y, w, this.h);
    }

    this.checkEdge = function() {
        const edgePadding = 0;
        return (((this.x + this.xdir * 5) - this.w / 2 < 0) || ((this.x + this.xdir * 5) + this.w / 2 + edgePadding > width));
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
