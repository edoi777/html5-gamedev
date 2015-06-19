function Entity(x,y,imageSrc) {
	this.pos = {x: 0, y: 0};
	this.size = {width: 0, height: 0};
	
	this.image = new Image();

	this.init = function(x,y,imageSrc) {
		this.pos.x = x;
		this.pos.y = y;

		this.image.src = imageSrc; 
		this.image.onload = this.imageOnLoadCallback.bind(this);
	}

	this.imageOnLoadCallback = function() {
		this.size.width = this.image.width;
		this.size.height = this.image.height;
	}

	this.update = function() {

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

	this.init(x,y,imageSrc);
}