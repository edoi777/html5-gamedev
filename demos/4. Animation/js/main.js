var CANVAS = null;
var CONTEXT = null;

var FPS = 60;
var FRAME_RATE = 1000/FPS;

var mario = null;

$(document).ready(function() {
    init();

    setInterval(function(){
        update();
        draw();
    }, FRAME_RATE);
});

function init() {
    CANVAS = $( '#canvas' )[0];
    CONTEXT = CANVAS.getContext( "2d" );

    mario = new Player(50, 50, "images/super-mario.png");
}

function update() {
    mario.update(mario.pos.x + 5, mario.pos.y);
}

function draw() {
    console.log("Drawing...");

    CONTEXT.fillStyle = "#000";
    CONTEXT.fillRect(0,0, CANVAS.width, CANVAS.height);

    mario.draw();
}