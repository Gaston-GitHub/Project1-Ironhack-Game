'use strict'


function main() {
        
    let gameWindowElement= document.querySelector('#game-window');
    let backgroundGame= document.querySelector('body');
    let stage;
    let game;
    

    /* splashScreen */

    let landingElement;
    let startGameBtn;
    let clickStart= function() {
         leaveLandingPage();
         moveToGame();
    }

    function landingPage() {
        stage= 'landing';

        landingElement= document.createElement('div');
        landingElement.setAttribute('id', 'landing');
        
        let title= document.createElement('h1');
        title.innerText= 'homer';
        landingElement.appendChild(title);
        let description= document.createElement('h3')
        description.innerText= 'la taberna de Moe';
        landingElement.appendChild(description);

        startGameBtn= document.createElement('button');
        startGameBtn.innerText= 'Start';
        landingElement.appendChild(startGameBtn);

        gameWindowElement.appendChild(landingElement);

        startGameBtn.addEventListener('click', clickStart )
        
    }

    function leaveLandingPage() {
        startGameBtn.removeEventListener('click', clickStart);
        landingElement.remove();
    }

    /* gameScreen */


    function moveToGame() {
        stage = 'game';
    
        game = new Game(gameWindowElement);
    
        game.onGameOver(function() {
          leaveGame();
          moveToGameOver();
        })
       }
    
      function leaveGame() {
        game.destroy();
      }
    
     
    
    function leaveGame() {
       game.destroy();
    }
    

    /* gameOverScreen */

    let gameOverElement;
    let playAgainBtn;
    let clickToRestart= function() {
        leaveGameOver();
        moveToGame();

    }
    
    function moveToGameOver() {
        stage= 'gameOver';

        gameOverElement= document.createElement('div');
        gameOverElement.setAttribute('id', 'game-over');

        let title= document.createElement('h5');
        title.innerText= 'Get drunk, Homer!';
        gameOverElement.appendChild(title);

        let yourScore= document.createElement('h4');
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
    
   
}

window.onload= main;