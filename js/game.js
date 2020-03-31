// Jimbo 02/14/20

const Game = function(){
    Game.loadlevel = function(x){
        Game.begin();
    }
    
    Game.begin = function(){
        Engine.play();
    }
};
