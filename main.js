// Jimbo 02/14/20

window.addEventListener("load", function(event){
    
    var controller = new Controller();
    var display = new Display();
    var game = new Game();
    var engine = new Engine(1000/60);
    
    window.addEventListener("resize", display.handleResize);
    window.addEventListener("keydown", Controller.handleKeyDown);
    window.addEventListener("keyup", Controller.handleKeyUp);

    Engine.start();
});