import Game from './libs/Game.js';

(function() {
    var html = document.documentElement;
    var canvas = document.getElementById("myCanvas");
    var config, game;

    canvas.width = html.clientWidth * 0.6;
    canvas.height = html.clientHeight;

    config = {
        backImage: document.getElementById("back"),
        shipImage: document.getElementById("ship")
    };

    // todo load game control
    console.log(config.shipImage.complete);

    game = new Game(canvas, config);
    game.start();
})();

