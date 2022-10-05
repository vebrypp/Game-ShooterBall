export default class  Projectile {
    constructor(game) {
        this.game = game
        this.x = this.game.w / 2;
        this.y = this.game.h / 2;
        this.r = 5;
        this.speed = 10;
        this.angel = Math.atan2(this.game.controller.y - this.y, this.game.controller.x - this.x);
        this.vx = Math.cos(this.angel) * this.speed;
        this.vy = Math.sin(this.angel) * this.speed;
        this.color = 'red';
    };
    draw(c) {
        c.beginPath();
        c.fillStyle = this.color;
        c.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        c.fill();
        c.closePath();
    };
    update(index) {
        this.x += this.vx;
        this.y += this.vy;
        if(this.x > this.game.w || this.x < 0 || this.y > this.game.h || this.y < 0)
        this.game.projectiles.splice(index, 1);
    };
};