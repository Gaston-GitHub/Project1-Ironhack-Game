
class Player {
    constructor(ctx) {
        this.ctx= ctx;

        this.x = 725;
        this.y = 600;
        

    }

    
    moveLeft() {
        this.x = this.x - 10
    }

    moveRight() {
        this.x = this.x + 10 
    }


}