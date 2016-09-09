class Bullet {
    constructor(bulletImg, x, y, speed) {
        this.img = bulletImg;
        this.x = x - bulletImg.width / 2;
        this.y = y;
        this.width = bulletImg.width;
        this.height = bulletImg.height;
        this.speed = speed;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y);
        this.y -= this.speed;
    }
}

export default Bullet;
