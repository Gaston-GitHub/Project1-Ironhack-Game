
class Beers {
    constructor(ctx) {
        this.ctx= ctx;
        this.x = Math.random() * 1350; 
        this.y = 0; 
        this.interval = undefined;
        this.size = 80;
               
    }

    move() {
        this.interval = setInterval(this.drop.bind(this), 90)
    }

    drop() {
        
        this.y = this.y + 10
    }

    draw() {
       

        const beerImg = new Image();
        beerImg.src = '/img/oie_transparent (2).png';
        this.ctx.drawImage(beerImg, this.x, this.y, 70, 70)
        
        if (this.y > 690 ) {
            return this.y = 0;
        }  
     }

     
     
     
            
        

    
}