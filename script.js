import Game from './sprite/js/game.js';

window.addEventListener('load', function() {
    let w, h;
    const canvas = document.querySelector('#myCanvas');
    const c = canvas.getContext('2d');
    
    resizeCanvas();
    const game = new Game(w, h);

    function resizeCanvas() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
    };
    function animationLoop() {
        c.clearRect(0, 0, w, h);
        game.draw(c);
        game.update();
        requestAnimationFrame(animationLoop);
    };
    animationLoop()

    window.addEventListener('resize', resizeCanvas);
});