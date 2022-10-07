import Projectile from "./projectile.js";

export default class Controller {
    constructor(game) {
        this.x = null;
        this.y = null;
        window.addEventListener('click', (e) => {
            this.x = e.x;
            this.y = e.y;
            game.projectiles.push(new Projectile(game))
        });
    };
};