
function Cloud(x) {
	this.x = x;
	this.y = random(30, 100);
	this.r = random(30, 50);
	this.count = random(3, 5);
	this.dir = 0.2;
	
	this.show = function() {
		noStroke();
		fill(245);
		ellipse(this.x, this.y, this.r);
		ellipse(this.x + 15, this.y, this.r);
		ellipse(this.x + 30, this.y, this.r);
		ellipse(this.x + 5, this.y - 15, this.r);
		ellipse(this.x + 15, this.y - 15, this.r);
	}
	
	this.move = function() {
		this.x += this.dir;
	}
	
	this.check = function() {
		if (this.x >= 520) {
			return true;
		} else {
			return false;
		}
	}
}