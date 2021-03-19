class Game {
    constructor(ctx, player, width, height) {
        
        this.ctx = ctx;
        this.width= width;
        this.heigh= height; 
        
        this.player = player
        console.log(this.player);
    }

    drawHomer() {
        this.ctx.fillStyle = 'red'
        
        this.ctx.fillRect(this.player.x, this.player.y, 30, 30 )
        // const img= new Image();
        // img.addEventListener('load', () => {
        //     this.ctx.drawImage(img, 0, 0);
        // });
        // img.src= '/img/images (6).png';
    }

    drawBeers() {

    }

    drawNonalcbeers() {

    }

    drawDonuts() {

    }
    
    assignKeys() {
        document.addEventListener('keydown', (key) => {
            console.log(key.code);
          if (key.code === 'ArrowLeft') {
              this.player.moveLeft();
          }
          if (key.code === 'ArrowRight') {
              this.player.moveRight();
          } 

        })
    }

        
    clean() {
        this.ctx.clearRect(0, 0, 1350, 730)
    }
        
        
    update() {
        this.clean();
        this.drawHomer();
        this.drawBeers();
        this.drawNonalcbeers();
        this.drawDonuts();
        window.requestAnimationFrame(this.update.bind(this))
    }

    
    start() {
        this.assignKeys()
        window.requestAnimationFrame(this.update.bind(this))
    }
    
}

    
