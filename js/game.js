class Game {
    constructor(ctx, player, donuts, nonAlcbeers, width, height) {
        
        this.ctx = ctx;
        this.width= width;
        this.heigh= height; 
        
        this.player = player;
        this.beers = [new Beers(ctx), new Beers(ctx), new Beers(ctx)];
        this.donuts = [new Donuts(ctx), new Donuts(ctx), new Donuts(ctx)];
        this.nonAlcbeers = [new NonAlcBeers(ctx), new NonAlcBeers(ctx), new NonAlcBeers(ctx)];
    
        this.score = 0;
        this.timer = 40;
     }

    drawHomer() {
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.player.x, this.player.y, 30, 30 )

    }
        
    drawDonuts() {
        this.ctx.fillStyle = 'pink'
        this.ctx.fillRect((Math.random() * this.donuts.x), (Math.random() * this.donuts.y), 30, 30)
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
        console.log('update');

        this.clean();
        this.drawHomer();
        this.checkBeerCollisions();
        this.checkDonutsCollision();  
        this.drawScore();  
        
        
        this.beers.forEach(beer => {
            beer.draw();   
        });

        this.donuts.forEach(donuts => {
            donuts.draw();     
        });
        
        this.nonAlcbeers.forEach(nonAlcbeers => {
            nonAlcbeers.draw()
        });

        
        window.requestAnimationFrame(this.update.bind(this))
    }

    
    start() {

        this.assignKeys()


        this.beers.forEach(beer => {
            beer.move()
        });
        this.donuts.forEach(donuts => {
            donuts.move()
        });
        this.nonAlcbeers.forEach(nonAlcbeers => {
            nonAlcbeers.move()
        });
        window.requestAnimationFrame(this.update.bind(this))
    }
    


    checkBeerCollisions() {
        console.log('checkCollisions')
    this.beers.forEach(function (beer) {
      if (this.player.didCollide(beer)) {

        this.score += 10;   
      }
   
    }, this);
  }

    checkDonutsCollision() {
        this.donuts.forEach(function(donut) {
            if(this.player.didCollide(donut)) {
                this.score += 20;
            }
        }, this);
    }

    checkNonAlcBeerCollision() {
        this.nonAlcbeers.forEach(function(nonAlcbeer){
            if(this.player.didCollide(nonAlcbeer)) {
                    gameOver;
            }
        }, this);
    }

    drawScore() {
    this.ctx.font = "50px simpsonfont";
    this.ctx.fillStyle = "white";
    this.ctx.fillText("Score: "+ this.score, 60, 60);
}

    



    
    
}

    
