
class NonAlcBeers {

    constructor(ctx) {
        
        this.ctx= ctx;
        this.x = Math.random() * 1350;
        this.y = 0;
        this.setInterval = undefined;
        this.size = 80;
        
    }

    move() {
        this.interval = setInterval(this.drop.bind(this), 80)
    }

    drop() {
        this.y = this.y + 10
    }

    draw() {
        
        const elioImg = new Image();
        elioImg.src = '/img/elio.png';
        this.ctx.drawImage(elioImg, this.x, this.y, 70, 70)

        if(this.y > 690) {
            return this.y = 0
        }
    }
}