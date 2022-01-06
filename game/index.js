// game global variables
let ship, enemies = [], bullets = [], bomb, ui, core;
let currentLevel = 1;
let lives = 2;
let score = 0;

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
    ui = new Ui();

    ui.loadBackgroundStars();
    core.startGame();
}


// draw loop of the game
function draw() {

    background(0);

    ui.show();

    core.renderGameObjects();
    core.checkForGameOver();
    core.handleEnemiesScreenEdge();

    core.cleanup();

    core.checkForLevelUp();
    core.checkForGameWin();
}
