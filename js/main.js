document.addEventListener('DOMContentLoaded', () =>{
    
    const main_content_element = document.getElementById('content');

    let game,

        start_button,
        splash_element,
        canvas_element,
        gameOver_element,
        

    create_html = html => {
        const div= document.createElement('div');
        div.innerHTML= html;
        return div.children[0];
    };

    const destroy_splash = () => {
        start_button.removeEventListener('click', destroy_splash);
        splash_element.remove();
        game_screen();

    }

    const destroy_gameOver = () => {
        
    }

    

    const build_splash = () => {
        splash_element = create_html(`<div id="splash_container">
        <h1>Title</h1>
        <p>Instructions</p>
        <button id="start_button">Start Game</button>
        </div>`);

        main_content_element.appendChild(splash_element);

        start_button= document.getElementById('start_button');
        start_button.addEventListener('click', destroy_splash);

    }

    
    const game_screen = () => {
        canvas_element= create_html(`<canvas id="canvas" width= "1350" height= "730">
       </canvas>`);
       
        main_content_element.appendChild(canvas_element);
        let canvas= document.getElementById('canvas'),
        ctx= canvas.getContext('2d');
        
        game = new Game( ctx, new Player(ctx),  canvas.width, canvas.height, endGame)
        
        game.start();


    }

    const gameOverScreen = () => {
        
        gameOver_element = create_html(`<div id="gameOver_container">
          <h1>Game Over</h1>
          <p>You scored
            <span id="final_score"></span> points.</p>
          <button id="restart_button">Back to Start</button>
        </div>`);

        main_content_element.appendChild(gameOver_element);
    
        restart_button = document.getElementById('restart_button');
        final_score = document.getElementById('final_score');
        final_score.innerText = game.player.score;
        
        restart_button.addEventListener('click', destroy_gameOver) ;

        canvas.style = 'display: none';
        gameOver_element.style = 'display: block';

        
    }

    
    build_splash();

    const endGame = () => {
        canvas_element.remove();
        gameOverScreen();
    
        
    }
    
    
   
})



