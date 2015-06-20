var keys = {};

$(document).keydown(function (e) {
    keys[e.which] = true;
});

$(document).keyup(function (e) {
    delete keys[e.which];
});

function Entity(x,y,imageSrc, keyCodes, boundary) {
	this.pos = {x: 0, y: 0};
	this.size = {width: 0, height: 0};
	this.keyCodes = {};
	this.speed = 10;
	this.boundary = false;
	
	this.image = new Image();

	this.init = function(x,y,imageSrc, keyCodes, boundary) {
		this.pos.x = x;
		this.pos.y = y;

		this.boundary = boundary;
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

		if(this.boundary) {
			if(this.pos.x < 0) {
				this.pos.x = 0;
			} else if(this.pos.x > CANVAS.width - this.size.width) {
				this.pos.x = CANVAS.width - this.size.width;
			} else if(this.pos.y < 0) {
				this.pos.y = 0;
			} else if(this.pos.y > CANVAS.height - this.size.height) {
				this.pos.y = CANVAS.height - this.size.height;
			}
		} else {
			if(this.pos.x + this.size.width < 0) {
				this.pos.x = CANVAS.width + this.size.width;
			} else if(this.pos.y + this.size.height < 0) {
				this.pos.y = CANVAS.height + this.size.height;
			} else if(this.pos.x > CANVAS.width + this.size.width) {
				this.pos.x = 0 - this.size.width
			} else if(this.pos.y > CANVAS.height + this.size.height) {
				this.pos.y = 0 - this.size.height
			}
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

	this.init(x,y,imageSrc, keyCodes, boundary);
}