
class Donuts {
    constructor(ctx) {
        this.ctx= ctx;
        this.x = Math.random() * 1350;
        this.y = 0;
        this.setInterval = undefined;
        this.size = 10;
    }

    move() {
        this.interval = setInterval(this.drop.bind(this), 70)
    }

    drop() {
        this.y = this.y + 10
    }

    draw() {
        this.ctx.fillStyle = 'pink'
        this.ctx.fillRect(this.x, this.y, 30, 30)
        if(this.y > 690) {
            return this.y = 0
        }
    }

    
}