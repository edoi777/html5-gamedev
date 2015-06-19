$(document).ready(init);

var CANVAS = null;
var CONTEXT = null;

var frameCount = 0;
var FPS = 60;
var FRAME_RATE = 1000/FPS;

function init() {
	CANVAS = $("#canvas")[0];
	CONTEXT = CANVAS.getContext("2d");

	setInterval(function() {
		update();
		draw();
	}, FRAME_RATE);
}

function update() {
	frameCount++;
}

function draw() {
	CONTEXT.fillStyle = "#000";
    CONTEXT.fillRect(0,0, CANVAS.width, CANVAS.height);

    CONTEXT.font = '30px Sans-Serif';
    CONTEXT.fillStyle = "#FFF";
    CONTEXT.fillText('Frames drawn: ' + frameCount, 50, 50);
}