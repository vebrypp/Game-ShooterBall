export default class Score {
    constructor(game) {
        this.game = game;
        this.width = 50;
        this.x = this.game.w / 2;
        this.y = this.game.h / 2;
        this.text = 0;
        this.font = 'Arial';
        this.fontSize = '30px'
        this.color = 'black';
    };
    draw(c) {
        c.beginPath();
        c.font = `${this.fontSize} ${this.font}`;
        c.textAlign = 'center';
        c.textBaseline = 'middle';
        c.fillStyle = this.color;
        c.fillText(this.text, this.x, this.y, this.width);
        c.closePath();
    };
    update() {
        this.text++;
    };
};