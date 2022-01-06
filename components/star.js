function Star() {

    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);

    this.update = function () {
        this.z = this.z - ui.speed;
        if (this.z < 1) {
            this.z = width;
            this.x = random(-width, width);
            this.y = random(-height, height);
        }
    }

    this.show = function () {

        push();
        translate(width / 2, 0);

        fill(255, 100);
        noStroke();

        const sx = map(this.x / this.z, 0, 1, 0, width);
        const sy = map(this.y / this.z, 0, 1, 0, height);

        const r = map(this.z, 0, width, 6, 0);
        ellipse(sx, sy, r, r);
        pop();

    }
}