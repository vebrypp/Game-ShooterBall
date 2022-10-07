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
        if(!game.gameOver){
            requestAnimationFrame(animationLoop)
        } else {
            let restart = window.confirm('Apakah ingin mengulangi permainan?');
            if(restart) {
                game.restart();
                requestAnimationFrame(animationLoop)
            };
        };
        game.draw(c);
        game.update();
    };
    
    let start = window.confirm('Cara bermain: \n- Klik / Touch pada layar untuk menembak \n- Jika musuh menyentuh anda, maka permainan berakhir \nMulai Bermain ?');
    if(start) animationLoop();

    window.addEventListener('resize', resizeCanvas);
});