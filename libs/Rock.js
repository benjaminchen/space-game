class Rock {
    constructor(img, x, y, speed) {
        var r = Math.random();
        this.img = img;
        this.x = x;
        this.y = y;
        this.width = img.width;
        this.height = img.height;
        this.speed = speed * r;
        this.exploded = false;
    }

    draw(ctx, bullets) {
        var me, right, bottom;

        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        if (! this.exploded) this.y += this.speed;

        me = this;
        right = this.x + this.width;
        bottom = this.y + this.height * 0.6;
        bullets.forEach(function(bullet, index) {
            if (bullet.y <= bottom && (bullet.x >= me.x && bullet.x <= right)) {
                me.exploded = true;
                bullets.splice(index, 1);
            }
        });
    }
}

export default Rock;
