class Core {

    startGame = function () {
        ship = new Ship();
        this.generateEnemies();
    }

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

            enemies.push(new Enemy(xOffset, yOffset, hp));
            if ((i + 1) % maxPerRow === 0) {
                yOffset += verticalSpacing;
                xOffset = 0;
            }
        }
    }

    renderGameObjects = function () {

        // draw Ship
        ship.show();
        ship.move();

        // draw bullets[]
        bullets.forEach(bullet => {
            bullet.show();
            bullet.move();
            // check collision BULLET - ENEMY
            enemies.forEach(enemy => {
                if (core.isColliding(bullet, enemy)) {
                    score++;
                    enemy.getsHit();
                    bullet.destroy();
                }
            });
        });


        // draw bomb
        if (bomb) {
            bomb.show();
            bomb.move();

            enemies.forEach(enemy => {
                if (core.isColliding(bomb, enemy)) {
                    score++;
                    enemy.getsHit();
                }
            });

            // bomb has left the screen
            if (bomb.y < 0) {
                bomb = null;
            }
        }

        // draw enemies[]
        enemies.forEach(enemy => {
            enemy.show();
            enemy.move();
        });

    }

    checkForGameOver = function () {

        enemies.forEach(enemy => {
            // check collision SHIP - ENEMY
            if (core.isColliding(ship, enemy)) {
                lives--;

                // handle game over
                if (lives <= 0) {
                    console.log('GAMEOVER');
                    ui.gameOver();
                    noLoop();
                } else {
                    //reset enemy position if any lives left
                    enemies.forEach(enemy => {
                        enemy.resetPosition();
                    });
                }
            }
        });
    }

    checkForLevelUp = function () {

        //check level complete
        if (enemies.length === 0 && LEVELS.hasOwnProperty(currentLevel + 1)) {
            currentLevel++;
            core.generateEnemies();
        }

    }

    checkForGameWin = function () {
        // check game won
        if (enemies.length === 0 && !LEVELS.hasOwnProperty(currentLevel + 1)) {
            ui.gameWin();
        }
    }

    handleEnemiesScreenEdge = function () {

        enemies.every(enemy => {
            // check enemy rows are touching the screen edge
            if (enemy.x + enemy.r / 2 >= width || enemy.x - enemy.r / 2 <= 0) {
                enemies.forEach(enemy => {
                    enemy.shiftDown();
                });
                return false;
            }
            return true;
        });
    }

    cleanup = function () {

        // remove dead bullets from screen
        for (let i = bullets.length - 1; i >= 0; i--) {
            if (bullets[i].toDelete) {
                bullets.splice(i, 1);
            }
        }

        // remove dead enemy from screen
        for (let i = enemies.length - 1; i >= 0; i--) {
            if (enemies[i].hp <= 0) {
                enemies.splice(i, 1);
            }
        }

    }

    isColliding = function (a, b) {
        const d = dist(a.x, a.y, b.x, b.y);
        return d < a.r / 2 + b.r / 2;
    }

}