
class Beers {
    constructor(ctx) {
        this.ctx= ctx;
        this.x = 1350;
        this.y = 730;
    }

    moveLeft() {
        this.x = this.y - 10
    }

    moveRight() {
        this.y = this.y + 10
    }

}