// Jimbo 02/14/20

const Display = function(){
    Display.render = function(){
        sctx.clearRect(0,0, sprites.width, sprites.height);
        sctx.save();
        sctx.translate(player1.x,  player1.y);
        sctx.scale(1 * player1.direction,1);
        sctx.drawImage(Display.getAnimation(),-22, -35,44,70);
        sctx.restore();
        sctx.fillRect(0,430,2000,1000);

    };
    Display.getAnimation = function(){
        frameNumber++;
        if (frameNumber > 99){
            frameNumber = 0;
        }
        davidFrame = Math.floor(frameNumber/25 + 1);
        return document.getElementById("idle"+davidFrame);
    };
};
