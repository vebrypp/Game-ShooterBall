import Player from './player.js';
import Controller from './controller.js';
import Score from './score.js';
import { EnemyLeft, EnemyRight } from './enemy.js';

export default class Game {
    constructor(w, h) {
        this.gameOver = false;
        this.w = w;
        this.h = h;
        this.controller = new Controller(this);
        this.player = new Player(this);
        this.score = new Score(this);
        this.particles = [];
        this.projectiles = [];
        this.enemyType = []
        this.enemies = [];
        this.enemiesDefeated = [];
        this.enemyTimeLeft = 0;
        this.enemySpawnLeft = rand(100, 200);
        this.enemyTimeRight = 0;
        this.enemySpawnRight = rand(100, 200);
    };
    draw(context) {
        this.player.draw(context);
        this.score.draw(context);
        this.particles.forEach(e => {
            e.draw(context);
        });
        this.enemies.forEach(e => {
            e.draw(context);
        });
        this.projectiles.forEach(e => {
            e.draw(context);
        });
    };
    update() {
        this.player.update();
        this.enemyAdd();
        this.particles.forEach(e => {
            e.update(e.index);
        });
        this.projectiles.forEach(e => {
            e.update(e.index);
        });
        this.enemies.forEach((e) => {
            e.update();
            if(e.marked) this.enemies.splice(this.enemies.indexOf(e), 1), this.score.update();
        });
    };
    enemyAdd() {
        if(this.enemyTimeLeft > this.enemySpawnLeft) {
            this.enemyTimeLeft = 0;
            this.enemies.push(new EnemyLeft(this));
        } else {
            this.enemyTimeLeft++;
        };
        if(this.enemyTimeRight > this.enemySpawnRight) {
            this.enemyTimeRight = 0;
            this.enemies.push(new EnemyRight(this));
        } else {
            this.enemyTimeRight++;
        };
    };
};

function rand(max, min) {
    return Math.round(Math.random() * (max - min)) + min;
}