# Project1-Ironhack-Game

#Arcade Homer Version Beta 1.0

The purpose of the game is to catch maximum beers and try Homer Simpson got drunk.

The game screen is an interface from Moe's Tavern.

The player is represented by an image of Homer Simpson whose function is catch the maximum amount of beers.

The movement of the player is horizontal, for this the left arrow and right arrow key of the keyboard are used that make the player move in the corresponding direction.

The game ends when Homer collide with Elio Pez.

## MVP

### Tecnique

Canvas, DOM, HTML, CSS

### Games Screen

- Start Screen

  - Title
  - Play start button

- Game Screen

  - Canvas

- Game Over Screen

  - Play again
  - Play button to start again

### Game

    * Create interface
    * Create player
    * Move player
    	* Press the right and left keys to move the player horizontally.
    * Create items that fall
    * Check collision
    	* If there is a collision with a beer and donuts Homer score points.
    	* If there is a collision with Elio Pez, Homer loose.

## Back Log

### Score

- Shows:
  - Number of lives
  - Timer

### No music on Version Beta 1.0

- Add background music to game
- Add music on and off button to setup
- Add sound effects on and off button to setup

## Data structure

**main.js**

```
createStartScreen();
createGameScreen();
createGameOverScreen();
destroyStartScreen();
destroyGameScreen();
destroyGameOverScreen();
var game = new Game({

    ctx: ctx,
    this.donuts,
    this.beers,
    this.nonAlcBeers
    this.player
  });

game.start();
```

**Game.js**

```
Class Game {
	constructor()
}
drawHomer();
assignKeys();
clean();
update();
start();
checkBeerCollision();
checkNonAlcBeerCollision();
drawScore();
endGame();
```

###### Player.js

```
class Player() {
	constructor()
}
moveLeft();
moveRight();
didCollide(beer);
didCollide(donut);
didCollide(nonAlcBeer);

```

##### Beers.js

```
class Beers() {
	constructor()
}
move();
drop();
draw();
```

##### NonAlcBeers.js

```
class NonAlcBeers(){
	constructor()
}
move();
drop();
draw();

```

###### Donuts.js

```
class Donuts {
	constructor()
}
move();
drop();
draw();

```
