export default class Particle {
    constructor(game, x, y, color) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.r = rand(5, 10);
        this.rInit = this.r
        this.reduceR = 0.1;
        this.speed = 5
        this.vx = rand(-this.speed, this.speed);
        this.vy = rand(-this.speed, this.speed);
        this.color = color;
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
        if(this.r <= this.rInit * 5 / 10) this.game.particles.splice(index, 1);
        else this.r -= this.reduceR;
    };
};

function rand(min, max) {
    return Math.round(Math.random() * (max -min)) + min;
}