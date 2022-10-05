import Player from './player.js';
import Enemy from './enemy.js';
import Controller from './controller.js';

export default class Game {
    constructor(w, h) {
        this.w = w;
        this.h = h;
        this.controller = new Controller(this);
        this.player = new Player(this);
        this.projectiles = [];
        this.enemies = [];
        this.enemyTime = 0;
        this.enemySpawn = 100;
    };
    draw(context) {
        if(this.enemyTime > this.enemySpawn) {
            this.enemyTime = 0;
            this.enemies.push(new Enemy(this));
        } else {
            this.enemyTime++;
        };
        this.player.draw(context);
        this.enemies.forEach(e => {
            e.draw(context);
        });
        this.projectiles.forEach(e => {
            e.draw(context);
        });
    };
    update() {
        console.log(this.enemies)
        this.projectiles.forEach(e => {
            e.update(e.index);
        });
        this.enemies.forEach(e => {
            e.update(e.index);
        });
    };
};