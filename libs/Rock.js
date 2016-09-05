class Rock {
    constructor(img, x, y, speed) {
        var r = Math.random();
        this.img = img;
        this.x = x;
        this.y = y;
        this.width = img.width;
        this.height = img.height;
        this.speed = speed * r;
        this.exploding = false;
        this.exploded = false;
        this.explodeImg = new Image();
        this.explodeImg.src = 'images/explosion.png';
        this.num = 0;
    }

    draw(ctx, bullets) {
        var me, right, bottom;

        this.exploding === true ? this.explode(ctx) : ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        if (! this.exploded) this.y += this.speed;

        me = this;
        right = this.x + this.width;
        bottom = this.y + this.height * 0.6;
        bullets.forEach(function(bullet, index) {
            if (bullet.y <= bottom && (bullet.x >= me.x && bullet.x <= right)) {
                me.exploding = true;
                bullets.splice(index, 1);
            }
        });
    }

    explode(ctx) {
        var remainder, quotient, x, y;
        remainder = this.num % 4;
        quotient = (this.num - remainder) / 4;
        x = this.x + this.width / 2 - 32;
        y = this.y + this.height / 2;
        ctx.drawImage(this.explodeImg, remainder * 64, quotient * 64, 64, 64, x, y, 64, 64);
        this.num === 15 ? this.exploded = true : this.num++;
    }
}

export default Rock;
