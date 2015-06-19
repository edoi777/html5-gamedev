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
	entityMario = new Entity(100, 100, "images/super-mario.png", keyCodesMario);

	var keyCodesBird ={
	    UP: 38,
	    LEFT: 37,
	    DOWN: 40,
	    RIGHT: 39
	};
	entityBird = new Entity(700, 100, "images/angry-bird.png", keyCodesBird);

	setInterval(function() {
		update();
		draw();
	}, FRAME_RATE);
}

function update() {
	entityMario.update();
	entityBird.update();
}

function draw() {
	CONTEXT.fillStyle = "#000";
    CONTEXT.fillRect(0,0, CANVAS.width, CANVAS.height);

    entityMario.draw();
    entityBird.draw();
}