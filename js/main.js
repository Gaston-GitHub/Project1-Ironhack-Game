
document.addEventListener('DOMContentLoaded', () => {
    let game;

    /* Helper function: to create a div element */
    function createHtml(html) {
        const div= document.createElement('div');
        div.innerHTML= html;
        return div.children[0];
    };

    /* Main function: manage different instances of the game */

    function main() {
        const mainContentElement= document.getElementById('main-content');
    }

    /* splashScreen */

    let splashScreenElement;
    let startButtonElement;
    let instructionsButtonElement;

    function clickStart(){
        hideSplashScreen();
        gameScreen();
    }

    function instructionClickStart() {
        hideSplashScreen();
        instructionsScreen();
    }

    function splashScreen() {
        splashScreenElement= createHtml(`<div id='splash-screen'>
            <img id='logo'src='/img/maxresdefault.jpeg'>
            <div class='btn-holder'>
                <button class='btn-start'><Start Game</button>
                <button class='btn-instructions><Instructions</button>
            </div>`);

        mainContentElement.appendChild(splashScreenElement);
        startButtonElement= splashScreenElement.getElementByClassName('btn-start')[0];
        startButtonElement.addEventListener('click', clickStart)

        instructionsButtonElement= splashScreenElement.getElementsByClassName('btn-instructions')[0];
    }



    













})