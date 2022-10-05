import Player from './player.js';
import Controller from './controller.js';

export default class Game {
    constructor(w, h) {
        this.w = w;
        this.h = h;
        this.projectiles = [];
        this.controller = new Controller(this);
        this.player = new Player(this);
    };
    draw(context) {
        this.player.draw(context);
        this.projectiles.forEach(e => {
            e.draw(context);
        });
    };
    update() {
        this.projectiles.forEach(e => {
            e.update(e.index);
        });
    };
};