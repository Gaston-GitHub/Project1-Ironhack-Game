
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
        
        const crossLeft = beerLeft <= playerRight && beerLeft >= playerLeft;
        const crossRight = beerRight >= playerLeft && beerRight <= playerRight;

        const crossTop = beerTop <= playerBottom && beerTop >= playerTop;
        const crossBottom = beerBottom >= playerTop && beerBottom <= playerBottom;
    
    
        if ((crossLeft || crossRight) && (crossTop || crossBottom)) {
          return true;
        } else {
          return false;
        }
      }     
                

                
            
            
        
        
       
            
            
      
        

    

   
    

}