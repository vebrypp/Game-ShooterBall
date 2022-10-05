import Player from './player.js'

export default class Game {
    constructor(w, h) {
        this.w = w;
        this.h = h;
        this.player = new Player(this)
    };
    draw(context) {
        this.player.draw(context);
    };
    update() {

    };
};