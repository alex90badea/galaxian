// game global variables
let ship, enemies = [], bullets = [], ui, core;
let currentLevel = 1;
let lives = 2;
const debug = false;


// load game assets
let shipImage, bulletImage, enemyImage;

function preload() {
    shipImage = loadImage('assets/ship.png');
    bulletImage = loadImage('assets/bullet.png');
    enemyImage = loadImage('assets/enemies.png');
}

// init
function setup() {
    createCanvas(1024, 768);

    core = new Core();
    ship = new Ship();
    ui = new Ui();

    ui.showStart();
    core.generateEnemies();


}

// function mouseMoved() {
//     ship.y = mouseY;
// }

// draw loop of the game
function draw() {
    background(0);

    ui.show();
    ui.starField();


    // Ship display
    ship.show();
    ship.move();

    // draw bullets
    bullets.forEach(bullet => {
        bullet.show();
        bullet.move();
        // check collision bullet - enemy
        enemies.forEach(enemy => {
            if (core.isColliding(bullet, enemy)) {
                enemy.getsHit();
                bullet.destroy();
            }
        });
    });


    // check collision ship - enemy
    enemies.forEach(enemy => {
        if (core.isColliding(ship, enemy)) {
            lives--;

            // handle game over
            if (lives <= 0) {
                console.log('GAMEOVER');
                ui.gameOver();
                noLoop();
            } else {
                //reset enemy position if lives left
                enemies.forEach(enemy => {
                    enemy.resetPosition();
                });
            }
        }
    });

    // check enemy rows are touching the screen edge
    let edge = false;
    enemies.forEach(enemy => {
        enemy.show();
        enemy.move();
        if (enemy.x + enemy.r / 2 >= width || enemy.x - enemy.r / 2 <= 0) {
            edge = true;
        }
    });
    if (edge) {
        enemies.forEach(enemy => {
            enemy.shiftDown();
        });
    }

    // remove bullets from screen
    for (let i = bullets.length - 1; i >= 0; i--) {
        if (bullets[i].toDelete) {
            bullets.splice(i, 1);
        }
    }

    // remove enemy from screen
    for (let i = enemies.length - 1; i >= 0; i--) {
        if (enemies[i].hp <= 0) {
            enemies.splice(i, 1);
        }
    }

    //check level complete
    if (enemies.length === 0 && LEVELS.hasOwnProperty(currentLevel + 1)) {
        currentLevel++;
        core.generateEnemies();
    }

    // check game won
    if (enemies.length === 0 && !LEVELS.hasOwnProperty(currentLevel + 1)) {
        ui.gameWin();
    }


}

