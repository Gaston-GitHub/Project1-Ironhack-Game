
class Player {
    constructor(ctx, lives) {
        this.ctx= ctx;
        this.x = 725;
        this.y = 700;
        this.size = 10;
        
    }

    moveLeft() {
        this.x = this.x - 10
    }

    moveRight() {
        this.x = this.x + 10 
    }


    didCollide(beer) {
        const playerLeft = this.x;
        const playerRight = this.x + this.size
        const playerTop = this.y;
        const playerBottom = this.y + this.size;
        
    
        const beerLeft = beer.x;
        const beerRight = beer.x + beer.size;
        
        const beerTop = beer.y;
        const beerBottom = beer.y + beer.size;
        
        
        const crossBeerLeft = beerLeft <= playerRight && beerLeft >= playerLeft;
        const crossBeerRight = beerRight >= playerLeft && beerRight <= playerRight;
        

        const crossBeerTop = beerTop <= playerBottom && beerTop >= playerTop;
        const crossBeerBottom = beerBottom >= playerTop && beerBottom <= playerBottom;

        
    
    
        if ((crossBeerLeft || crossBeerRight) && (crossBeerTop || crossBeerBottom)) {
          return true;
        } else {
          return false;
        };

        
      }    
      
      didCollide(donut) {
        const playerLeft = this.x;
        const playerRight = this.x + this.size
        const playerTop = this.y;
        const playerBottom = this.y + this.size;

        const donutLeft = donut.x;
        const donutRight = donut.x + donut.size;

        const donutTop = donut.y;
        const donutBottom = donut.y + donut.size;

        const crossDonutLeft = donutLeft <= playerRight && donutLeft >= playerLeft;
        const crossDonutRight = donutRight >= playerLeft && donutRight <= playerRight;

        const crossDonutTop = donutTop <= playerBottom && donutTop >= playerTop;
        const crossDonutBottom = donutBottom >= playerTop && donutBottom <= playerBottom;


        if ((crossDonutLeft || crossDonutRight) && (crossDonutTop || crossDonutBottom)) {
          return true;
        } else {
          return false;
        };

      }

      didCollide(nonAlcbeer) {
        const playerLeft = this.x;
        const playerRight = this.x + this.size
        const playerTop = this.y;
        const playerBottom = this.y + this.size;

        const nonAlcBeerLeft = nonAlcbeer.x;
        const nonAlcBeerRight = nonAlcbeer.x + nonAlcbeer.size;

        const nonAlcBeerTop = nonAlcbeer.y;
        const nonAlcBeerBottom = nonAlcbeer.y + nonAlcbeer.size;

        const crossNonAlcBeerLeft = nonAlcBeerLeft <= playerRight && nonAlcBeerLeft >= playerLeft;
        const crossNonAlcBeerRight = nonAlcBeerRight >= playerLeft && nonAlcBeerRight <= playerRight;

        const crossNonAlcBeerTop = nonAlcBeerTop <= playerBottom && nonAlcBeerTop >= playerTop;
        const crossNonAlcBeerBottom = nonAlcBeerBottom >= playerTop && nonAlcBeerBottom <= playerBottom;

        if ((crossNonAlcBeerLeft || crossNonAlcBeerRight) && (crossNonAlcBeerTop || crossNonAlcBeerBottom)) {
          return true;
        } else {
          return false;
        };

        


      }
                

                
            
            
        
        
       
            
            
      
        

    

   
    

}