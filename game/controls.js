function keyReleased() {
    if (key !== ' ') {
        ship.setDir(0);
    }
    if (keyIsDown(RIGHT_ARROW)) {
        ship.setDir(1);
    }
    if (keyIsDown(LEFT_ARROW)) {
        ship.setDir(-1);
    }
}


function keyPressed() {
    if (key === ' ') {
        bullets.push(new Bullet(ship.x, ship.y - ship.h / 2));
    }

    if (key === 'Control' && bomb === undefined) {
        bomb = new Bomb(ship.x, ship.y - ship.h / 2);
    }

    if (keyCode === RIGHT_ARROW) {
        ship.setDir(1);
    } else if (keyCode === LEFT_ARROW) {
        ship.setDir(-1);
    }
}
