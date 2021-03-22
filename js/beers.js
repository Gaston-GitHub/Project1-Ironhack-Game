
class Beers {
    constructor(ctx) {
        this.ctx= ctx;
        this.x = Math.random() * 1350; 
        this.y = 0; 
        this.interval = undefined;
        this.size = 10;
               
    }

    move() {
        this.interval = setInterval(this.drop.bind(this), 90)
    }

    drop() {
        
        this.y = this.y + 10
    }

    draw() {
        this.ctx.fillStyle = 'yellow'
        this.ctx.fillRect(this.x, this.y, 30, 30)
        console.log('draw', this.y);
        if (this.y > 690 ) {
            return this.y = 0;
        }  
     }

     
     
     
            
        

    
}