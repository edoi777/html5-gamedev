$(document).ready(init);

var CANVAS = null;
var CONTEXT = null;

var FPS = 60;
var FRAME_RATE = 1000/FPS;

var entityMario = null;
var entityBird = null;

function init() {
	CANVAS = $("#canvas")[0];
	CONTEXT = CANVAS.getContext("2d");

	var keyCodesMario ={
	    UP:87,
	    LEFT:65,
	    DOWN:83,
	    RIGHT:68
	};
	entityMario = new Entity(100, 100, "images/super-mario.png", keyCodesMario, true);

	var keyCodesBird ={
	    UP: 38,
	    LEFT: 37,
	    DOWN: 40,
	    RIGHT: 39
	};
	entityBird = new Entity(700, 100, "images/angry-bird.png", keyCodesBird, false);

	setInterval(function() {
		update();
		draw();
	}, FRAME_RATE);
}

function update() {
	entityMario.update();
	entityBird.update();
}

function hasCollided(one, two) {
	 if(one.pos.x < two.pos.x + two.size.width &&
		   one.pos.x + one.size.width > two.pos.x &&
		   one.pos.y < two.pos.y + two.size.height &&
		   one.size.height + one.pos.y > two.pos.y) {
	    return true;
	}
}

function draw() {
	CONTEXT.fillStyle = "#000";
    CONTEXT.fillRect(0,0, CANVAS.width, CANVAS.height);

    if(hasCollided(entityMario, entityBird)) {
    	CONTEXT.font = '30px Sans-Serif';
	    CONTEXT.fillStyle = "#FFF";
	    CONTEXT.fillText('Ouch!', 50, 50);
    }

    entityMario.draw();
    entityBird.draw();
}