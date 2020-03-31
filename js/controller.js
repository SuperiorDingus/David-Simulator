// Jimbo 02/14/20

const Controller = function(){
    Controller.handleKeyDown = function(key){
        if (key.keyCode == 39){
            player1.direction = 1;
            input.right = 1;
        }
        if (key.keyCode == 37){
            player1.direction = -1;
            input.left = 1;
        }
        
        if (key.keyCode == 38){
            input.y = 1;
        }
    };
    
    Controller.handleKeyUp = function(key){
        if (key.keyCode == 39){
            input.right = 0;
        }
        if (key.keyCode == 37){
            input.left = 0;
        }
        if (key.keyCode == 38){
            input.y = 0;
        }
    };
};
