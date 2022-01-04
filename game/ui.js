class Ui {

    constructor() {
        this.stars = [];
        this.speed = 3;
    }

    gameOver() {
        textSize(60);
        fill("#be1d1d");
        text(`GAME OVER`, width / 2, height / 2);
    }

    gameWin() {
        textSize(60);
        fill("#35be1d");
        text(`GAME WIN`, width / 2, height / 2);
    }

    showStart() {
        for (let i = 0; i < 400; i++) {
            this.stars[i] = new Star();
        }
    }

    starField() {
        this.stars.forEach(star => {
            star.update();
            star.show();
        })
    }

    show() {
        textSize(20);
        noStroke();
        textAlign(CENTER);
        fill(124, 200, 60);
        text(`LEVEL: ${currentLevel}`, 70, 40);

        fill(224, 100, 60);
        text(`LIVES: ${lives}`, width - 70, 40);

        textSize(30);
        fill("#b2e141");
        text(`Galaxian`, width / 2, 40);
    }
}