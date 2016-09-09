import Game from './libs/Game.js';

(function() {
    var html = document.documentElement;
    var canvas = document.getElementById("myCanvas");
    var config, game;

    canvas.width = html.clientWidth > 750 ? 750 : html.clientWidth;
    canvas.height = html.clientHeight;

    config = {
        backImage: document.getElementById("back"),
        shipImage: document.getElementById("ship"),
        rocks: [
            {
                node: document.getElementById('rock-A'),
                width: 72,
                height:72,
                num: 18,
                counter: 5
            },
            {
                node: document.getElementById('rock-B'),
                width: 72,
                height:72,
                num: 18,
                counter: 5
            }
        ],
        rockExplosionImage: {
            node: document.getElementById('rock-explosion'),
            width: 64,
            height: 64,
            num: 15,
            counter: 4
        },
        shipExplosionImage: {
            node: document.getElementById('ship-explosion'),
            width: 96,
            height: 96,
            num: 17,
            counter: 5
        },
        bulletImage: document.getElementById('bullet')
    };

    // todo load game control
    console.log(config.shipImage.complete);

    game = new Game(canvas, config);

    document.addEventListener("keypress", function(e) {
        if (e.keyCode === 13) {
            game.init();
            game.start();
        }
    });

})();

