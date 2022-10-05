export default class Enemy {
    constructor(game) {
        this.game = game;
        this.playerX = this.game.player.x;
        this.playerY = this.game.player.y;
        this.playerR = this.game.player.r;
        this.x = 0;
        this.y = 0;
        this.r = rand(50, 100);
        this.rInit = this.r;
        this.reduceR = this.rInit / 10;
        this.color = `rgba(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)}, 1)`
    };
    draw(c) {
        c.beginPath();
        c.fillStyle = this.color;
        c.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        c.fill();
        c.closePath();
    };
    update(index) {
        if(this.collision()) {
            if(this.r <= this.reduceR) this.game.enemies.splice(index, 1);
            else this.r -= this.reduceR;
        };
        let dx = this.playerX - this.x;
        let dy = this.playerY - this.y;
        this.x += dx/100;
        this.y += dy/100;
    };
    collision() {
        let collision = false;
        this.game.projectiles.forEach((e) => {
            let dx = e.x - this.x;
            let dy = e.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if(distance <= this.r + e.r) return collision = true;
        });
        return collision;
    };
};

function rand(max, min) {
    return Math.round(Math.random() * (max - min)) + min;
}