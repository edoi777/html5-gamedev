var keys = {};

$(document).keydown(function (e) {
    keys[e.which] = true;
});

$(document).keyup(function (e) {
    delete keys[e.which];
});

function Entity(x,y,imageSrc, keyCodes) {
	this.pos = {x: 0, y: 0};
	this.size = {width: 0, height: 0};
	this.keyCodes = {};
	this.speed = 10;
	
	this.image = new Image();

	this.init = function(x,y,imageSrc, keyCodes) {
		this.pos.x = x;
		this.pos.y = y;

		this.keyCodes = keyCodes;

		this.image.src = imageSrc; 
		this.image.onload = this.imageOnLoadCallback.bind(this);
	}

	this.imageOnLoadCallback = function() {
		this.size.width = this.image.width;
		this.size.height = this.image.height;
	}

	this.update = function() {
		if(keys[this.keyCodes.UP]) {
			this.pos.y -= this.speed;
		} else if(keys[this.keyCodes.LEFT]) {
			this.pos.x -= this.speed;
		} else if(keys[this.keyCodes.RIGHT]) {
			this.pos.x += this.speed;
		} else if(keys[this.keyCodes.DOWN]) {
			this.pos.y += this.speed;
		}
	}

	this.draw = function() {
		if(this.image) {
			CONTEXT.drawImage(
	            this.image, 
	            this.pos.x, this.pos.y,
	            this.size.width, this.size.height
	        );
		}
	}

	this.init(x,y,imageSrc, keyCodes);
}