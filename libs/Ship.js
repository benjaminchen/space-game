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
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    fire() {}

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
