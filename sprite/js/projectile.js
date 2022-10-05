export default class  Projectile {
    constructor(game) {
        this.game = game;
        this.x = this.game.w / 2;
        this.y = this.game.h / 2;
        this.r = 5;
        this.speed = 10;
        this.angel = Math.atan2(this.game.controller.y - this.y, this.game.controller.x - this.x);
        this.vx = Math.cos(this.angel) * this.speed;
        this.vy = Math.sin(this.angel) * this.speed;
        this.color = this.game.player.color;
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
            this.game.projectiles.splice(index, 1);
        };
        this.x += this.vx;
        this.y += this.vy;
        if(this.x > this.game.w || this.x < 0 || this.y > this.game.h || this.y < 0)
        this.game.projectiles.splice(index, 1);
    };
    collision() {
        let collision = false;
        this.game.enemies.forEach((e) => {
            let dx = e.x - this.x;
            let dy = e.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if(distance < this.r + e.r) collision = true;
        });
        return collision;
    };
};