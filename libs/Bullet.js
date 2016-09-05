class Bullet {
    constructor(x, y, speed) {
        this.img = document.getElementById("bullet");
        this.x = x - this.img.width / 2;
        this.y = y;
        this.speed = speed;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.img.width, this.img.height);
        this.y -= this.speed;
    }
}

export default Bullet;
