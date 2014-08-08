var canvas = null;
var canvasWidth = 0;
var canvasHeight = 0;

var context = null;

var FRAME_RATE = 1000/30;
var numRenderedFrames = 0;

$( document ).ready(function() {
    canvas = $( '#canvas' )[0];
        canvasWidth = canvas.width;
        canvasHeight = canvas.height;

    context = canvas.getContext( "2d" );

    setInterval(function(){
        update();
        draw();
    }, FRAME_RATE);
});

function update() {
    numRenderedFrames++;
}

function draw() {
    context.fillStyle = "#000";
    context.fillRect(0,0, canvasWidth, canvasHeight);

    context.font = '30px Sans-Serif';
    context.fillStyle = "#FFF";
    context.fillText('Number of Rendered Frames: ' + numRenderedFrames, 10, 30);
}