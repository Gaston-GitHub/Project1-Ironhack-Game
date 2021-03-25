class Game {
    constructor(ctx, player, width, height, callback) {
        
        this.ctx = ctx;
        this.width = width;
        this.heigh = height; 
        this.cb = callback;
        
        this.player = player;
        this.beers = [new Beers(ctx), new Beers(ctx), new Beers(ctx)];
        this.donuts = [new Donuts(ctx), new Donuts(ctx), new Donuts(ctx)];
        this.nonAlcbeers = [new NonAlcBeers(ctx), new NonAlcBeers(ctx), new NonAlcBeers(ctx), new NonAlcBeers(ctx), new NonAlcBeers(ctx)];

        this.gameIsOver = false;
    
        this.score = 0;
        this.timer = 40;
         
     }

    drawHomer() {
        
        const homerImg = new Image();
        homerImg.src = '../img/homer-simpson-rock-on-psd-409560.png';
        this.ctx.drawImage(homerImg, this.player.x, this.player.y, 200, 190 )

    }
 
    assignKeys() {

        document.addEventListener('keydown', (key) => {
            
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
        this.checkBeerCollisions();
        this.checkDonutsCollision(); 
        this.checkNonAlcBeerCollision();
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

        if (this.checkNonAlcBeerCollision()) {
            this.Game.stop();
            this.cb();
            return;
        }
    
        
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
                this.endGame();          
            }
        }, this);
    }

    drawScore() {

    this.ctx.font = "50px simpsonfont";
    this.ctx.fillStyle = "yellow";
    this.ctx.fillText("Score: "+ this.score, 130, 60);
    this.ctx.fillText("Timer: "+ this.timer, 1000, 60);
    }

    endGame() {

        this.gameIsOver = true;
        this.cb(); 
        
    } 

    /*timer() {
        const timeleft = 40; 
        const downloadTimer = setInterval(function(){
            if(timeleft)
        })
    }*/


    

    
}

    
