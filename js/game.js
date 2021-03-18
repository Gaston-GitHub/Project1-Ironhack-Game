class Game {
    constructor(canvas, ctx, width, height, callback) {
        this.canvas= canvas;
        this.ctx= ctx;
        this.width= width;
        this.heigh= height; 
        this.callback= callback;

        this.player= new Player(canvas, ctx, width/2, height/2)
    }

    load() {
        this.canvas.style.backgroundImage= url("/img/Moes_Bar.jpeg");
    }

    
}