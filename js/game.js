class Game {
    constructor(ctx, player, beers, donuts, nonAlcbeers, width, height) {
        
        this.ctx = ctx;
        this.width= width;
        this.heigh= height; 
        
        this.player = player;
        this.beers = beers;
        this.donuts = donuts;
        this.nonAlcbeers = nonAlcbeers;
        console.log(this.player);
        console.log(this.beers);
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
       this.ctx.fillStyle = 'yellow'

       this.ctx.fillRect(this.beers.x, this.beers.y, 30, 30)
    }

    drawNonalcbeers() {
        this.ctx.fillStyle = 'black'

        this.ctx.fillRect(this.nonAlcbeers.x, this.nonAlcbeers.y, 30, 30)

    }

    drawDonuts() {
        this.ctx.fillStyle = 'pink'

        this.ctx.fillRect(this.donuts.x, this.donuts.y, 30, 30)

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

    
