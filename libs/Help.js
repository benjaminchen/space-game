class Help {
    static between(x, min, max) {
        return x >= min && x <= max;
    }

    static cycleAnimation(img, cycleSpeed = 1, repeat = true) {
        return {
            img: img,
            counter: 0,
            end: false,
            repeat: repeat,
            draw: function(ctx, x, y) {
                if (this.end) return;
                var img, width, height, counter, divisor, quotient, remainder;
                img = this.img;
                width = img.width;
                height = img.height;
                counter = Math.floor(this.counter);
                divisor = img.counter;
                remainder = counter % divisor;
                quotient = (counter - remainder) / divisor;
                ctx.drawImage(
                    img.node,
                    remainder * width,
                    quotient * height,
                    width,
                    height,
                    x,
                    y,
                    width,
                    height
                );
                if (counter === img.num && !this.repeat) this.end = true;
                counter === img.num ? this.counter = 1 : this.counter += cycleSpeed;
            }
        };
    }
}

export default Help;
