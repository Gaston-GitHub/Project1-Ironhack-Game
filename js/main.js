document.addEventListener('DOMContentLoaded', () =>{
    
    const main_content_element = document.getElementById('content');

    let name,
        game,

        start_button,
        restart_button,

        splash_element,
        canvas_element,
        end_game_element;

    window.create_html= html => {
        const div= document.createElement('div');
        div.innerHTML= html;
        return div.children[0];
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

    build_splash();
    



   
})