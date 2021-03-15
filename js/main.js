

/*document.addEventListener('DOMContentLoaded', () => {
    let game;*/

    /* Helper function: to create a div element */
function createHtml(html) {
        const div= document.createElement('div');
        div.innerHTML= html;
        return div.children[0];
    };

    /* Main function: manage different instances of the game */

function main() {
        let mainContentElement= document.getElementById('main-content');
    

    /* splashScreen */

    let splashScreenElement;
    let startButtonElement;
    

    function clickStart() {
        hideSplashScreen();
        gameScreen();
    }

    function splashScreen() {
        splashScreenElement= createHtml(`<div id="splash-screen">
            <img id="logo" src='/img/maxresdefault.jpeg'>
            <div class="button">
                <button class="btn-start">Start Game</button>
            </div>`);

        mainContentElement.appendChild(splashScreenElement);
        startButtonElement= splashScreenElement.getElementsByClassName('btn-start')[0];
        startButtonElement.addEventListener('click', clickStart)
    }

    function hideSplashScreen() {
        splashScreenElement.remove();
        startButtonElement.removeEventListener('click', clickStart);
    }

    /* gameScreen */

    let gameScreenElement;


    function gameScreen() {
        gameScreenElement= createHtml(`<div id="game-screen">
        <img id="gameScreen" src="/img/Moes_Bar.jpeg">`);

        mainContentElement.appendChild(gameScreenElement);
        startGame();
    };

    /* gameOverScreen */

    let gameOverScreenElement;
    let restartGameButtonElement;
``
    function reStartCLick() {
        hideGameOverScreen();
        gameOverScreen();
    }

    function gameOverScreen() {
        gameOverScreenElement= createHtml(`<div id="gameOver-Screen">
        <img id="logo" src="/img/ezgif.com-gif-maker (1).gif">
        <button class="btn-start">Restart Game</button>
      </div>`);

      mainContentElement.appendChild(gameOverScreenElement);
      restartGameButtonElement= gameOverScreen.getElementsByClassName("btn-start")[0];
      startButtonElement.addEventListener("click", clickStart);
      
    }

    function hideGameOverScreen() {
        gameOverScreenElement.remove();
        restartGameButtonElement.removeEventListener("click", reStartCLick);
        }


splashScreen();

}

/* startApp */
window.addEventListener("load", main);