
function Player() {
    let settings = {
        marignbottom: 10,
        defaultHeight: 66
    }
};

player= new Image();
player.src= "/img/homer-simpson-rock-on-psd-409560.png";
player.posX= (canvas.width / 2) - (player.width / 2);
player.posY= canvas.height - (player.height == 0 ? settings.defaultHeight : player.height) - setting.marignbottom;
player.life= life;
player.score= score;
player.dead= false;
player.speed= playerSpeed;

