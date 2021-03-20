
class NonAlcBeers {
    constructor(ctx) {
        this.ctx= ctx;
        this.x = Math.random() * 1350;
        this.y = 0;
        this.setInterval = undefined;
    }

    move() {
        this.interval = setInterval(this.drop.bind(this), 80)
    }

    drop() {
        this.y = this.y + 10
    }

    draw() {
        this.ctx.fillStyle = 'black'
        this.ctx.fillRect(this.x, this.y, 30, 30)

        if(this.y > 690) {
            return this.y = 0
        }
    }
}