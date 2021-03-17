


document.addEventListener('DOMContentLoaded', () => {
        
    let gameWindowElement= document.querySelector('#game-window');
    let game;
    

    // ------- landing page ------

    let landingElement;
    let startGameBtn;
    let clickStart= function() {
         leaveLandingPage();
         
    }

    function landingPage() {

        landingElement= document.createElement('div');
        landingElement.setAttribute('id', 'landing');
        
        const title= document.createElement('h1');
        title.innerText= 'homer';
        landingElement.appendChild(title);
        const description= document.createElement('h3')
        description.innerText= 'la taberna de Moe';
        landingElement.appendChild(description);

        startGameBtn= document.createElement('button');
        startGameBtn.innerText= 'Start Game';
        landingElement.appendChild(startGameBtn);

        gameWindowElement.appendChild(landingElement);

        startGameBtn.addEventListener('click', clickStart )
        
    }

    function leaveLandingPage() {
        startGameBtn.removeEventListener('click', clickStart);
        landingElement.remove();
    }

    // ------- game page -------


    function moveToGame() {
        
    }
    

    // ------- game over page ------

    let gameOverElement;
    let playAgainBtn;
    let clickToRestart= function() {
        leaveGameOver();
        moveToGame();

    }
    
    function moveToGameOver() {

        gameOverElement= document.createElement('div');
        gameOverElement.setAttribute('id', 'game-over');

        const title= document.createElement('h5');
        title.innerText= 'Get drunk, Homer!';
        gameOverElement.appendChild(title);

        const yourScore= document.createElement('h4');
        yourScore.innerText= 'SCORE: ' + game.score;
        gameOverElement.appendChild(yourScore);

        playAgainBtn= document.createElement('button');

        playAgainBtn.setAttribute('id', 'play-again');
        playAgainBtn.innerHTML= 'Play again!';
        gameOverElement.appendChild(playAgainBtn);

        gameWindowElement.appendChild(gameOverElement);

        playAgainBtn.addEventListener('click', clickToRestart)

    }

    function leaveGameOver() {
        playAgainBtn.removeEventListener('click', clickToRestart);
        gameOverElement.remove();

    }

    landingPage();
    
   
});

