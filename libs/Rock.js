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

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        if (! this.exploded) this.y += this.speed;
    }

    explode() {}
}

export default Rock;
