var canvas = null;
var canvasWidth = 0;
var canvasHeight = 0;

var context = null;

var FRAME_RATE = 1000/30;

var imgSuperMario = new Image();
imgSuperMario.src = '../images/super-mario.png';

var pos = {x : 0, y:0};
var size = {width:0,height:0};
var imageHasLoaded = false;

imgSuperMario.onload = function() {
    size.width = imgSuperMario.width / 4;
    size.height = imgSuperMario.height / 4;

    pos.x = (canvasWidth/2) - (size.width/2);
    pos.y = (canvasHeight/2) - (size.height/2);

    imageHasLoaded = true;
};


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

// http://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
var KEYCODES = {
    LEFT_ARROW  : 37,
    UP_ARROW    : 38,
    RIGHT_ARROW : 39,
    DOWN_ARROW  : 40
}

keyCode = null;
keyMessage = "";

$( window ).keyup(function( event ){
    keyCode = event.keyCode;
});

var soundLaser = new Audio("../sounds/laser.mp3");


function update() {
    if( keyCode != null ) {
        switch( keyCode ) {
            case KEYCODES.LEFT_ARROW :
                    pos.x -= 10;
                break;

            case KEYCODES.RIGHT_ARROW :
                    pos.x += 10;
                break;

            case KEYCODES.UP_ARROW :
                    pos.y -= 10;
                break;

            case KEYCODES.DOWN_ARROW :
                    pos.y += 10;
                break;
        }

        soundLaser.play();
        keyCode = null;
    }
}

function draw() {
    context.fillStyle = "#000";
    context.fillRect(0,0, canvasWidth, canvasHeight);

    if( imageHasLoaded ) {
        context.drawImage(imgSuperMario, pos.x, pos.y, size.width, size.height );
    }
}