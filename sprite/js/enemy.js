export class Enemy {
    constructor(game) {
        this.game = game;
        this.playerX = this.game.player.x;
        this.playerY = this.game.player.y;
        this.playerR = this.game.player.r;
        this.r = rand(50, 100);
        this.x = 0;
        this.y = rand(0 - this.r, this.game.h + this.r);
        this.speed = 3;
        this.dx = (this.playerX - this.x) * this.speed * 0.001;
        this.dy = (this.playerY - this.y) * this.speed * 0.001;
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
            if(this.r <= this.rInit * 5 / 10) this.game.enemies.splice(index, 1);
            else this.r -= this.reduceR;
        };
        this.x += this.dx;
        this.y += this.dy;
    };
    collision() {
        let collision = false;
        this.game.projectiles.forEach((e) => {
            let dx = e.x - this.x;
            let dy = e.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if(distance <= this.r + e.r) {
                collision = true;
                this.game.projectiles.splice(e.index, 1);
                this.game.score.update();
            };
        });
        return collision;
    };
};

function rand(max, min) {
    return Math.round(Math.random() * (max - min)) + min;
}