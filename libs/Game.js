import Back from './Back.js';
import Ship from './Ship.js';
import Rock from './Rock.js';

// todo 雙緩衝區
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
        this.rockImage = new Image();
        this.rockImage.src = "images/rocks/rock.png";
        this.rocks = [];
    }

    generateRock() {
        if (new Date() % 50 != 0 || this.rocks.length > 10) return;
        var rock;
        rock = new Rock(this.rockImage, Math.random() * (this.screen.width - this.rockImage.width - 10), -this.rockImage.height - 5, 5);
        this.rocks.push(rock);
    }

    draw() {
        var me = this,
            ctx = this.ctx,
            screen = this.screen,
            back = this.back,
            ship = this.ship;

        ctx.clearRect(0, 0, screen.width, screen.height);
        back.draw(ctx);
        ship.draw(ctx);
        for (var i = 0; i < this.rocks.length; i++) {
            var rock = this.rocks[i];
            if (rock.y > (me.screen.height + 10) || rock.exploded) {
                this.rocks.splice(i, 1);
            } else {
                rock.draw(ctx);
            }
        }
    }

    start() {
        this.draw();
        this.generateRock();
        window.requestAnimationFrame(this.start.bind(this));
    }
}

export default Game;
