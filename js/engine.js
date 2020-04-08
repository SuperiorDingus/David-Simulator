// Jimbo 03/30/20

const Engine = function(framerate){
    Engine.start = function(){
        sctx = document.getElementById("sprites").getContext('2d');
        mctx = document.getElementById("map").getContext('2d');
        input = {x:0, y:0, left:0, right:0};
        Game.loadlevel(1); //placeholder
        frameNumber = 1;
        camera = {x:0, y:0, textx:0, testy:0};
        level = {height:0, width:0};
        map = [1,0,12,
        1,1,12,
        1,2,12,
        1,38,21];
    };
    
    Engine.play = function(){
        player1 = {x:40, y:40, xvel:0, yvel:0, jumping:0, onGround:false, direction:1};
        setInterval(function(){
            
            // Y stuff done here, first.
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
            
            if (player1.onGround === false){
                player1.yvel+= 0.8;
            }
            
            if (Game.testCollision() === true){
                player1.yvel = Math.floor(player1.yvel/2);
                // Still not clean, but gets the job done. Fix later?
                if (Game.testCollision() === true){
                player1.yvel = 0;
                }
            }
            
            // Checks for floor? Also a bit messy.
            player1.yvel ++;
            if (Game.testCollision() === true){
                player1.onGround = true;
            }
            else {
                player1.onGround = false;
            }
            player1.yvel--;
            
            // Checks for X input. Does all x stuf here.
            input.x = input.right-input.left;
            
            if (input.x !== 0){
                player1.xvel += 1.6 * input.x;
            }
            
            
            // Player x velocity decreases, causes player to slow down when not pressing the arrows.
            if (player1.xvel>0){
                if (player1.xvel<1){
                    player1.xvel = 0;
                }
                else {
                player1.xvel-= 0.8;
                }
            }
            if (player1.xvel<0){
                if (player1.xvel> -1){
                    player1.xvel = 0;
                }
                else {
                player1.xvel+= 0.8;
                }
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
            
            if (Game.testCollision() === true){
                player1.xvel = Math.floor(player1.xvel/2);
                // Could be cleaned, just makes collison slightly smoother.
                if (Game.testCollision() === true){
                    player1.xvel = 0;
                }
            }
            
            //Applies movement
            player1.x += player1.xvel;
            player1.y += player1.yvel;
            
            Display.render();
            
            camera.x = player1.x - 683;
            camera.y = player1.y - 384;
            
            //refreshes layers if camera moves
            if (camera.x != camera.testx || camera.y != camera.testy){
                Display.refresh();
                camera.testx = camera.x;
                camera.testy = camera.y;
                Display.drawMap();
            }
        },framerate);
    };
};
