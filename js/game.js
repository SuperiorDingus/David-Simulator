// Jimbo 03/30/20

const Game = function(){
    Game.loadlevel = function(x){
        Game.begin();
    };
    
    Game.begin = function(){
        Engine.play();
    };
    
    Game.testCollision = function(){
        var xcheck = player1.x-16 + player1.xvel;
        var ycheck = player1.y-30 + player1.yvel;
        var collisions = 0;
        
        for (var i = 0; i < map.length; i += 3){
            if (xcheck < map[i+ 1]*35 + 35 &&
            xcheck + 32 > map[i + 1]*35 &&
            ycheck < map[i + 2]*35 + 35 &&
            ycheck + 60 > map[i + 2]*35) {
                collisions ++;
            }
        }
        if (collisions !== 0){
            return true;
        }
        else {
            return false;
        }
    };
    
    Game.placeBlock = function(x,y){
        var placeX = Math.floor((x + camera.x)/35);
        var placeY = Math.floor((y + camera.y)/35);
        map.push(1,placeX,placeY);
        if (Game.testCollision()){
            map.pop();
            map.pop();
            map.pop();
        }
    };
};
