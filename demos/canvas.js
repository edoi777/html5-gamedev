var canvas = null;
var canvasWidth = 0;
var canvasHeight = 0;

var context = null;

$( document ).ready(function() {
    canvas = $( '#canvas' )[0];
        canvasWidth = canvas.width;
        canvasHeight = canvas.height;

    context = canvas.getContext( "2d" );

    draw();
});

function draw() {
    context.fillStyle = "#000";
    context.fillRect(0,0, canvasWidth, canvasHeight);

    context.font = '30px Sans-Serif';
    context.fillStyle = "#FFF";
    context.fillText('Hello world!', 10, 30);
}
