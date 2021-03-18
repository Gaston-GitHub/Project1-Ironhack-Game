document.addEventListener('DOMContentLoaded', () =>{
    
    const main_content_element = document.getElementById('content');

    let game,

        start_button,
        restart_button,

        splash_element,
        canvas_element,
        

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
        canvas_element= create_html(`<canvas id="canvas" width= "1350" height= "730"></canvas>`);
        main_content_element.appendChild(canvas_element);
        let canvas= document.getElementById('canvas'),
        ctx= canvas.getContext('2d');

        game= new Game({
            ctx: ctx,
            canvas: canvas,
            player: new Player(canvas, width, height, callback) 
        })

    }

    build_splash();
    



   
})