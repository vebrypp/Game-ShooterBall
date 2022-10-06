import Player from './player.js';
import Controller from './controller.js';
import Score from './score.js';
import { Enemy } from './enemy.js';

export default class Game {
    constructor(w, h) {
        this.gameOver = false;
        this.w = w;
        this.h = h;
        this.controller = new Controller(this);
        this.player = new Player(this);
        this.score = new Score(this);
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
        this.score.draw(context);
        this.enemies.forEach(e => {
            e.draw(context);
        });
        this.projectiles.forEach(e => {
            e.draw(context);
        });
    };
    update() {
        this.player.update();
        this.enemies.forEach(e => {
            e.update(e.index);
        });
        this.projectiles.forEach(e => {
            e.update(e.index);
        });
    };
};

function rand(max, min) {
    return Math.round(Math.random() * (max - min)) + min;
}