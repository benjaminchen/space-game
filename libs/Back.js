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
        var sw, sh, ih;
        sw = this.screen.width;
        sh = this.screen.height;
        ih = this.img.height;
        ctx.drawImage(this.img, 0, 0, sw, ih, this.x, this.y, sw, ih);
        ctx.drawImage(this.img, 0, 0, sw, ih, this.x, this.y1, sw, ih);

        if (this.y >= sh) {
            this.y = this.y1 - ih + this.speed;
        } else {
            this.y += this.speed;
        }

        if (this.y1 >= sh) {
            this.y1 = this.y - ih;
        } else {
            this.y1 += this.speed;
        }
    }
}

export default Back;
