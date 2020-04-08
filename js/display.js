// Jimbo 02/14/20

const Display = function(){
    Display.render = function(){
        //clears sprite layer
        sctx.clearRect(0,0, sprites.width, sprites.height);
        sctx.save();
        
        // Moves layer so player is flippable. Rounds so it doesn't look fuzzy.
        sctx.translate(Math.round(player1.x - camera.x),  Math.round(player1.y - camera.y));
        sctx.scale(1 * player1.direction,1);
        sctx.drawImage(Display.getAnimation(),-22, -36,44,70);
        sctx.restore();
        
        //Hitbox
        //sctx.fillRect(player1.x-16,player1.y-30,32,60);
        
        Display.drawMap();
    };
    Display.getAnimation = function(){
        frameNumber++;
        if (frameNumber > 99){
            frameNumber = 0;
        }
        davidFrame = Math.floor(frameNumber/25 + 1);
        return document.getElementById("idle"+davidFrame);
    };
    Display.drawMap = function(){
        mctx.save();
        mctx.translate(-camera.x, -camera.y);
        for (var i = 0; i < map.length; i += 3){
            if (map[i] == 1){
                mctx.fillStyle = "black";
            }
            if (map[i] == 2){
                mctx.fillStyle = "green";
            }
            if (map[i] == 3){
                mctx.fillStyle = "yellow";
            }
            mctx.fillRect(map[i+1]*35,map[i+2]*35,35,35);
        }
        mctx.restore();
    };
    
    Display.refresh = function(){
        mctx.clearRect(0,0, sprites.width, sprites.height);
    };
};
