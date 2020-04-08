// Jimbo 03/30/20

window.addEventListener("load", function(event){
    
    var controller = new Controller();
    var display = new Display();
    var game = new Game();
    var engine = new Engine(1000/60);
    
    window.addEventListener("resize", display.handleResize);
    window.addEventListener("keydown", Controller.handleKeyDown);
    window.addEventListener("keyup", Controller.handleKeyUp);
    
    // copied code
    function getMousePosition(canvas, event) { 
            let rect = canvas.getBoundingClientRect(); 
            let x = event.clientX - rect.left; 
            let y = event.clientY - rect.top; 
            Game.placeBlock(x,y);
        } 
      
        let canvasElem = document.querySelector("canvas"); 
          
        canvasElem.addEventListener("mousedown", function(e) 
        { 
            getMousePosition(canvasElem, e); 
        }); 

    Engine.start();
});
