class Ship {
    constructor(img, screen) {
        this.screen = screen;
        this.img = img;
        this.width = this.img.width * 0.8;
        this.height = this.img.height * 0.8;
        this.x = screen.width / 2 - this.width / 2;
        this.y = screen.height - this.height - 30;
        this.speed = 3;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    fire() {}

    explode() {}
}

export default Ship;
