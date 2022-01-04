function keyReleased() {
    if (key !== ' ') {
        ship.setDir(0);
    }
    if (keyIsDown(RIGHT_ARROW)){
        ship.setDir(1);
    }
    if (keyIsDown(LEFT_ARROW)){
        ship.setDir(-1);
    }
}


function keyPressed() {
    if (key === ' ') {
        let drop = new Bullet(ship.x, ship.y - ship.h / 2);
        bullets.push(drop);
    }

    if (keyCode === RIGHT_ARROW) {
        ship.setDir(1);
    } else if (keyCode === LEFT_ARROW) {
        ship.setDir(-1);
    }
}
