var CANVAS = null;
var CANVAS_WIDTH = 0;
var CANVAS_HEIGHT = 0;

var CONTEXT = null;

$( document ).ready(function() {
    CANVAS = $( '#canvas' )[0];
    CONTEXT = CANVAS.getContext( "2d" );

    draw();
});

function draw() {
    CONTEXT.fillStyle = "#000";
    CONTEXT.fillRect(0,0, CANVAS.width, CANVAS.height);

    CONTEXT.font = '30px Sans-Serif';
    CONTEXT.fillStyle = "#FFF";
    CONTEXT.fillText('Hello world! (X: 50, Y: 50)', 50, 50);
}
