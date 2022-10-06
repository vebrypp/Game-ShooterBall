import Particle from "./particle.js";

export class Enemy {
    constructor(game) {
        this.game = game;
        this.playerX = this.game.player.x;
        this.playerY = this.game.player.y;
        this.playerR = this.game.player.r;
        this.r = rand(50, 100);
        this.x = '';
        this.y = rand(0 - this.r, this.game.h + this.r);
        this.speed = 3;
        this.rMin = this.r / 5;
        this.reduceR = this.rMin;
        this.color = `hsl(${rand(0, 360)}, 100%, 50%)`;
        this.marked = false;
        this.particle = 20;
    };
    draw(c) {
        c.beginPath();
        c.fillStyle = this.color;
        c.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        c.fill();
        c.closePath();
    };
    update() {
        this.x += this.dx;
        this.y += this.dy;
        if(this.collision()) {
            this.r -= this.reduceR;
            if(this.r < this.rMin) {
                this.marked = true;
                for(let i = 0; i < this.particle; i++) {
                    this.game.particles.push(new Particle(this.game, this.x, this.y, this.color));
                };
            };
        };
    };
    collision() {
        let collision = false;
        this.game.projectiles.forEach(e => {
            let dx = e.x - this.x;
            let dy = e.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if(distance < e.r + this.r) this.game.projectiles.splice(e.index, 1), collision = true;
        });
        return collision;
    };
};
export class EnemyLeft extends Enemy{
    constructor(game) {
        super(game);
        this.x = 0 - this.r;
        this.dx = (this.playerX - this.x) * this.speed * 0.001;
        this.dy = (this.playerY - this.y) * this.speed * 0.001;
    };
};
export class EnemyRight extends Enemy{
    constructor(game) {
        super(game);
        this.x = this.game.w + this.r;
        this.dx = (this.playerX - this.x) * this.speed * 0.001;
        this.dy = (this.playerY - this.y) * this.speed * 0.001;
    };
};

function rand(max, min) {
    return Math.round(Math.random() * (max - min)) + min;
};