import Bullet from './Bullet.js';
import Help from './Help.js';

class Ship {
    constructor(img, bulletImg, explosionImage, screen) {
        var rate;
        this.img = img;
        this.bulletImg = bulletImg;
        this.screen = screen;
        rate = ((this.screen.width / 8) / this.img.width);
        this.width = Math.floor(this.img.width * rate);
        this.height = Math.floor(this.img.height * rate);
        this.x = screen.width / 2 - this.width / 2;
        this.y = screen.height - this.height - 30;
        this.speed = 3;
        this.rightBorder = screen.width - this.width;
        this.pressRight = false;
        this.pressLeft = false;
        this.exploding = false;
        this.explosionAnimation = Help.cycleAnimation(explosionImage, 0.2);

        document.addEventListener("keydown", function(e) {
            if (this.exploding) return;
            if (e.keyCode === 37) this.pressLeft = true;
            if (e.keyCode === 39) this.pressRight = true;
        }.bind(this));
        document.addEventListener("keyup", function(e) {
            if (e.keyCode === 37) this.pressLeft = false;
            if (e.keyCode === 39) this.pressRight = false;
        }.bind(this));
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        if (this.exploding === true) this.explosionAnimation.draw(ctx, this.x, this.y);
        if (this.pressRight && this.x < this.rightBorder) this.x += this.speed;
        if (this.pressLeft && this.x > 0) this.x -= this.speed;
    }

    fire(bullets) {
        if (this.exploding || bullets.length >= 10) return;
        var bullet = new Bullet(this.bulletImg, this.x + this.width / 2, this.y, 5);
        bullets.push(bullet);
    }

    explode() {
        this.exploding = true;
        this.pressLeft = false;
        this.pressRight = false;
    }
}

export default Ship;
