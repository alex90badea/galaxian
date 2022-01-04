class Core {

    generateEnemies = function () {

        let yOffset = 150;
        let xOffset = 0;
        const horizontalSpacing = 80;
        const verticalSpacing = 60;
        const maxPerRow = 10;
        for (let i = 0; i < LEVELS[currentLevel].enemiesCount; i++) {
            xOffset += horizontalSpacing;

            const difficultyPercent = LEVELS[currentLevel].difficulty;
            let hp = 1;

            if (1 - Math.random() < difficultyPercent) {
                hp = floor(random(2, currentLevel + 1));
            }
            
            enemies[i] = new Enemy(xOffset, yOffset, hp);
            if ((i + 1) % maxPerRow === 0) {
                yOffset += verticalSpacing;
                xOffset = 0;
            }
        }
    }

    isColliding = function (a, b) {
        const d = dist(a.x, a.y, b.x, b.y);
        return d < a.r / 2 + b.r / 2;
    }

}