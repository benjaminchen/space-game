import Help from './Help.js';

class Rock {
    constructor(rockImg, explosionImg, x, y, speed) {
        this.x = x;
        this.y = y;
        this.width = rockImg.width;
        this.height = rockImg.height;
        this.speed = speed;
        this.exploding = false;
        this.exploded = false;
        this.animation = Help.cycleAnimation(rockImg, 0.1);
        this.explosionAnimation = Help.cycleAnimation(explosionImg, 1, false);
    }

    draw(ctx) {
        if (this.exploding) {
            this.explosionAnimation.draw(ctx, this.x, this.y);
            this.exploded = this.explosionAnimation.end;
            return;
        }

        this.animation.draw(ctx, this.x, this.y);
        this.y += this.speed;
    }

    explode() {
        this.exploding = true;
    }
}

export default Rock;
