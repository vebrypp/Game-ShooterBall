export default class Player {
    constructor(game) {
        this.x = game.w / 2;
        this.y = game.h / 2;
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

    };
};