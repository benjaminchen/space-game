import Back from './Back.js';
import Ship from './Ship.js';

class Game {
    constructor(canvas, config) {
        this.screen = {
            width: canvas.width,
            height: canvas.height
        };
        this.config = config;
        this.ctx = canvas.getContext("2d");
        this.back = new Back(config.backImage, this.screen);
        this.ship = new Ship(config.shipImage, this.screen);
    }

    draw() {
        var ctx = this.ctx,
            screen = this.screen,
            back = this.back,
            ship = this.ship;

        ctx.clearRect(0, 0, screen.width, screen.height);
        back.draw(ctx);
        ship.draw(ctx);
    }

    start() {
        this.draw();
        window.requestAnimationFrame(this.start.bind(this));
    }
}

export default Game;
