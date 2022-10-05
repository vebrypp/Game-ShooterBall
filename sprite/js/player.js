export default class Player {
    constructor(game) {
        this.game = game;
        this.x = this.game.w / 2;
        this.y = this.game.h / 2;
        this.r = 50;
        this.color = 'white';
    };
    draw(c){
        c.beginPath();
        c.fillStyle = this.color;
        c.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        c.fill();
        c.closePath();
    };
    update() {
        if(this.collision()) {
            this.game.gameOver = true;
        };
    };
    collision() {
        let collision = false;
        this.game.enemies.forEach((e) => {
            let dx = e.x - this.x;
            let dy = e.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if(distance <= this.r + e.r) collision = true;
        });
        return collision;
    };
};