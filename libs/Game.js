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
        this.bullets = [];

        var me = this;
        document.addEventListener("keypress", keyPressHandler);
        function keyPressHandler(e) {
            if (e.keyCode === 32) me.ship.fire(me.bullets);
        }
    }

    generateRock() {
        if (new Date() % 20 != 0 || this.rocks.length > 2) return;
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

        for (var j = 0; j < this.bullets.length; j++) {
            var bullet = this.bullets[j];
            if (bullet.y < (-bullet.img.height - 5)) {
                this.bullets.splice(j, 1);
            } else {
                bullet.draw(ctx);
            }
        }

        for (var i = 0; i < this.rocks.length; i++) {
            var rock = this.rocks[i];
            if (rock.y > (me.screen.height + 10) || rock.exploded) {
                this.rocks.splice(i, 1);
            } else {
                rock.draw(ctx, this.bullets);
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
