
class NonAlcBeers {
    constructor(ctx) {
        this.ctx= ctx;
        this.x = 525;
        this.y = 100;
    }

    moveLeft() {
        this.x = this.x - 10
    }

    moveRight() {
        this.y = this.y + 10
    }
}