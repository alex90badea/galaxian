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
        text(`YOU WIN`, width / 2, height / 2);
    }

    loadBackgroundStars() {
        for (let i = 0; i < 400; i++) {
            this.stars[i] = new Star();
        }
    }

    drawStars() {
        this.stars.forEach(star => {
            star.update();
            star.show();
        })
    }

    show() {

        this.drawStars();

        noStroke();
        textAlign(CENTER);

        textSize(20);
        fill(124, 200, 60);
        text(`LEVEL: ${currentLevel}`, 70, 40);

        fill(224, 100, 60);
        text(`LIVES: ${lives}`, width - 70, 40);

        textSize(30);
        fill("#b2e141");
        text(`Galaxian`, width / 2, 40);

        textSize(16);
        fill("#b2e141");
        text(`Score: ${score}`, width / 2, 60);
    }
}