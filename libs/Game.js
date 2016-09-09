import Back from './Back.js';
import Ship from './Ship.js';
import Rock from './Rock.js';
import Help from './Help.js';

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
        this.ship = null;
        this.rocks = [];
        this.bullets = [];
        this.fireEventHadle = function(e) {
            if (e.keyCode === 32) this.ship.fire(this.bullets);
        }.bind(this);
        this.states = {
            handle: 0,
            backHandle: 0
        };

        this.backRun = function() {
            this.back.draw(this.ctx);
            this.states.backHandle = window.requestAnimationFrame(this.backRun.bind(this));
        }.bind(this);
        this.backRun();
    }

    init() {
        if (this.states.handle > 0) window.cancelAnimationFrame(this.states.handle);
        document.removeEventListener("keypress", this.fireEventHadle);

        var config = this.config;
        this.ship = new Ship(config.shipImage, config.bulletImage, config.shipExplosionImage, this.screen);
        this.rocks = [];
        this.bullets = [];

        document.addEventListener("keypress", this.fireEventHadle);
    }

    generateRock() {
        if (new Date() % 20 != 0 || this.rocks.length > 20) return;
        var rock, rockImg, explosionImg, x, y, speed;
        rockImg = this.config.rocks[Math.floor(Math.random() * this.config.rocks.length)];
        explosionImg = this.config.rockExplosionImage;
        x = Math.random() * (this.screen.width - rockImg.width - 10);
        y = -rockImg.height - 5;
        speed = Math.random() * 10;
        rock = new Rock(rockImg, explosionImg, x, y, speed);
        this.rocks.push(rock);
    }

    draw() {
        var me = this,
            ctx = this.ctx,
            ship = this.ship,
            between = Help.between;

        ship.draw(ctx);

        for (var j = 0; j < this.bullets.length; j++) {
            var bullet = this.bullets[j];
            if (bullet.y < (-bullet.height - 5)) {
                delete this.bullets.splice(j, 1);
            } else {
                bullet.draw(ctx);
            }
        }

        var shipR, shipL, shipT, shipB;
        shipL = ship.x;
        shipR = ship.x + ship.width;
        shipT = ship.y;
        shipB = ship.y + ship.height;
        for (var i = this.rocks.length - 1; i >= 0; i--) {
            var rock = this.rocks[i];
            if (rock.y > (me.screen.height + 10) || rock.exploded) {
                this.rocks.splice(i, 1);
            } else {
                rock.draw(ctx, this.bullets);
            }

            var rockR, rockL, rockB, bullets;
            rockL = rock.x;
            rockR = rock.x + rock.width;
            rockB = rock.y + rock.height * 0.6;
            bullets = this.bullets;
            bullets.forEach(function(bullet, index) {
                var bulletCenter = bullet.x + bullet.img.width / 2;
                if (bullet.y <= rockB && between(bulletCenter, rockL, rockR)) {
                    rock.explode();
                    bullets.splice(index, 1);
                }
            });

            if (between(rockB, shipT, shipB) && between(rockL, shipL, shipR)) {
                rock.explode();
                ship.explode();
            }

            if (between(rockB, shipT, shipB) && between(rockR, shipL, shipR)) {
                rock.explode();
                ship.explode();
            }
        }
    }

    start() {
        this.draw();
        if (!this.ship.exploding) this.generateRock();
        this.states.handle = window.requestAnimationFrame(this.start.bind(this));
    }
}

export default Game;
