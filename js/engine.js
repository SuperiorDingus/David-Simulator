// Jimbo 03/30/20

const Engine = function(framerate){
    Engine.start = function(){
        sctx = document.getElementById("sprites").getContext('2d');
        input = {x:0, y:0, left:0, right:0}
        Game.loadlevel(1); //placeholder
        frameNumber = 1;
    };
    
    Engine.play = function(){
        player1 = {x:40, y:40, xvel:0, yvel:0, jumping:0, onGround:false, direction:1};
        setInterval(function(){
            
            input.x = input.right-input.left;
            
            
            if (input.x !== 0){
                player1.xvel += 2 * input.x;
            }
            
            //Jumps if the player is on the ground.
            if (input.y == 1 && player1.onGround == 1){ 
                    player1.jumping = 6;
                    player1.yvel = -2;
                }
             
            //Increases jump height depending on press length.   
            if (input.y == 1 && player1.jumping !== 0){ 
                player1.jumping--;
                player1.yvel -= 1 + 0.6 * player1.jumping;
            }
            
            //Cuts amount of frames short if player stops holding.
            else if (input.y === 0 && player1.jumping !== 0){
                player1.jumping = 0;
            }
                
            player1.x += player1.xvel;
            player1.y += player1.yvel;
            
            // Player x velocity decreases, causes player to slow down when not pressing the arrows.
            if (player1.xvel>0){
                player1.xvel--;
            }
            if (player1.xvel<0){
                player1.xvel++;
            }
            
            // Stops player from reaching insane speeds.
            if (player1.xvel>7){
                player1.xvel = 7;
            }
            if (player1.xvel<-7){
                player1.xvel = -7;
            }
            if (player1.yvel>14){
                player1.yvel = 14;
            }
            
            // temporary, used for floor
            if (player1.y >= 400){
                player1.y = 400;
                player1.yvel = 0;
                player1.onGround = true;
            }
            else {
                player1.onGround = false;
            }
            
            if (player1.onGround === false){
                player1.yvel+= 0.8;
            }
            Display.render();
        },framerate);
    };
};
