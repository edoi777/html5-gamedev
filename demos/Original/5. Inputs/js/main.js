var CANVAS = null;
var CONTEXT = null;

var FPS = 60;
var FRAME_RATE = 1000/FPS;

var mario = null;

var keyCode = null;
var KEYCODES = {
    W:87,
    A:65,
    S:83,
    D:68,
};

$(document).ready(function() {
    init();

    setInterval(function(){
        update();
        draw();
    }, FRAME_RATE);
});

document.addEventListener('keydown', function(event) {
    keyCode = event.keyCode
});

function init() {
    CANVAS = $( '#canvas' )[0];
    CONTEXT = CANVAS.getContext("2d");

    mario = new Player(50, 50, "images/super-mario.png");
}

function update() {
    switch(keyCode) {
        case KEYCODES.W:
                mario.update(mario.pos.x, mario.pos.y-5);
            break;

        case KEYCODES.A:
                mario.update(mario.pos.x - 5, mario.pos.y);
            break;

        case KEYCODES.D:
                mario.update(mario.pos.x + 5, mario.pos.y);
            break;

        case KEYCODES.S:
                mario.update(mario.pos.x, mario.pos.y+5);
            break;
    } 
    
    keyCode = null;
}

function draw() {
    console.log("Drawing...");

    CONTEXT.fillStyle = "#000";
    CONTEXT.fillRect(0,0, CANVAS.width, CANVAS.height);

    mario.draw();
}