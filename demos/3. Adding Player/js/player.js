function Player(x,y,imageSrc){
	this.pos = {x:0, y:0};
	this.size = {width:0, height:0};
	this.image = new Image();

	this.imageHasLoaded = false;

	this.init = function(x,y,imageSrc) {
		this.pos.x = x;
		this.pos.y = y;

		this.image.src = "images/super-mario.png"; 
		this.image.onload = this.imageOnLoad.bind(this);
	}

	this.imageOnLoad = function(data) {
		this.imageHasLoaded = true;

		this.size.width = this.image.width;
		this.size.height = this.image.height;
	}

	this.update = function() {

	}

	this.draw = function() {
		if(mario.imageHasLoaded) {
			CONTEXT.drawImage(
	            this.image, 
	            this.pos.x, this.pos.y,
	            this.size.width, this.size.height
	        );
		}
	}

	this.init(x,y,imageSrc);
}