
class Player {
    constructor(ctx) {
        this.ctx= ctx;
        this.x = 725;
        this.y = 700;
        
    }

    moveLeft() {
        this.x = this.x - 10
    }

    moveRight() {
        this.x = this.x + 10 
    }

    collides_beers() {

        const collisionLeft = this.player.x <= this.beers.x;
        console.log(collisionLeft)
        const collisionRight = this.player.x >= this.beers.y;
        console.log(collisionRight)
        const collisionTop = this.player.y <= this.beers.y;
        console.log(collisionTop)

        const collidedCount = 0;
        for (i = 0; i < beers.length; i++) {
            let beers = beers[i];

            if (collisionTop && collisionLeft && collisionRight) {
                collidedCount++;
                this.beers.splice(i, 1);
                
            } else i++;
        }
    }
            
                

                
            
            
        
        
       
            
            
      
        

    

   
    

}