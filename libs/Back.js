class Back {
    constructor(img, screen) {
        this.screen = screen;
        this.img = img;
        this.x = 0;
        this.y = 0;
        this.y1 = -this.img.height;
        this.speed = 3;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y);
        ctx.drawImage(this.img, this.x, this.y1);

        if (this.y >= this.screen.height) {
            this.y = this.y1 - this.img.height + this.speed;
        } else {
            this.y += this.speed;
        }

        if (this.y1 >= this.screen.height) {
            this.y1 = this.y - this.img.height;
        } else {
            this.y1 += this.speed;
        }
    }
}

export default Back;
