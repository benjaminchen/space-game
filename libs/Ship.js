import Bullet from './Bullet.js';

class Ship {
    constructor(img, screen) {
        this.screen = screen;
        this.img = img;
        this.width = this.img.width * 0.8;
        this.height = this.img.height * 0.8;
        this.x = screen.width / 2 - this.width / 2;
        this.y = screen.height - this.height - 30;
        this.speed = 3;
        this.num = 1;
        this.rightBorder = screen.width - this.width;
        this.pressRight = false;
        this.pressLeft = false;

        document.addEventListener("keydown", keyDownHandler);
        document.addEventListener("keyup", keyUpHandler);

        var me = this;
        function keyDownHandler(e) {
            if (e.keyCode === 37) me.pressLeft = true;
            if (e.keyCode === 39) me.pressRight = true;
        }
        function keyUpHandler(e) {
            if (e.keyCode === 37) me.pressLeft = false;
            if (e.keyCode === 39) me.pressRight = false;
        }
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);

        if (this.pressRight && this.x < this.rightBorder) this.x += this.speed;
        if (this.pressLeft && this.x > 0) this.x -= this.speed;
    }

    fire(bullets) {
        var bullet = new Bullet(this.x + this.width / 2, this.y, 5);
        bullets.push(bullet);
    }

    explode(ctx) {
        var img, num;
        num = this.num < 10 ? "0" + this.num : this.num;
        img = new Image();
        img.src = "images/broken/ed_loop_0" + num + ".png";

        ctx.drawImage(img, this.x + 14, this.y - 26);

        this.num == 31 ? this.num = 1 : this.num++;
    }
}

export default Ship;
