export default class Enemy {
    constructor(game) {
        this.game = game;
        console.log(this.game.player.x)
        this.playerX = this.game.player.x;
        this.playerY = this.game.player.y;
        this.playerR = this.game.player.r;
        this.x = 0;
        this.y = 0;
        this.r = rand(30, 50);
        this.color = `rgba(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)}, 1)`
    };
    draw(c) {
        c.beginPath();
        c.fillStyle = this.color;
        c.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        c.fill();
        c.closePath();
    };
    update() {
        let dx = this.playerX - this.x;
        let dy = this.playerY - this.y;
        this.x += dx/100;
        this.y += dy/100;
    };
};

function rand(max, min) {
    return Math.round(Math.random() * (max - min)) + min;
}