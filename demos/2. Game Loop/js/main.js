var CANVAS = null;
var CONTEXT = null;

var FPS = 60;
var FRAME_RATE = 1000/FPS;

var numRenderedFrames = 0;

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
}

function update() {
    numRenderedFrames++;
}

function draw() {
    CONTEXT.fillStyle = "#000";
    CONTEXT.fillRect(0,0, CANVAS.width, CANVAS.height);

    CONTEXT.font = '30px Sans-Serif';
    CONTEXT.fillStyle = "#FFF";
    CONTEXT.fillText('Number of Rendered Frames: ' + numRenderedFrames, 10, 30);
}