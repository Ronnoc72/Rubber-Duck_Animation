var a = 0.0;
var inc = 0.05;
var interval = 300;
var clouds = [];
const arr = [];

function setup() {
	createCanvas(400, 400);
	clouds[0] = new Cloud(-60);
}

function draw() {
	if (clouds[0].check()) {
		clouds = arr;
		clouds[0] = new Cloud(-60)
	}
	background(212, 246, 255);
	for (let i = 0; i < clouds.length; i++) {
		clouds[i].show();
		clouds[i].move();
	}
	// drawing the duck
	// the beck
	push();
	fill(255, 200, 50);
	noStroke();
	beginShape();
	vertex(width / 2 + 5, (height / 2 - 35) + cos(a + 7250) * 15.0);
	vertex(width / 2 + 30, (height / 2 - 27) + cos(a + 7250) * 15.0);
	vertex(width / 2 + 30, (height / 2 - 26) + cos(a + 7250) * 15.0);
	vertex(width / 2 + 5, (height / 2 - 26) + cos(a + 7250) * 15.0);
	endShape();
	pop();
	// the body
	push();
	fill(230, 255, 0);
	noStroke();
	circle(width / 2, (height / 2 - 10) + cos(a + 7250) * 15.0, 40);
	circle(width / 2 + 5, (height / 2 - 30) + cos(a + 7250) * 15.0, 25);
	pop();
	// the wing
	push();
	noStroke();
	fill(250, 255, 75);
	beginShape();
	ellipse((width / 2 - 4), (height / 2 - 10) + cos(a + 7250) * 15.0, 25, 20);
	endShape();
	pop();
	// the eye
	push();
	strokeWeight(4);
	stroke(0);
	point(width / 2 + 7, (height / 2 - 32) + cos(a + 7250) * 15.0);
	pop();
	stroke(0, 100, 255);
	fill(0, 50, 150);
	strokeWeight(2);
	beginShape();
	// drawing the sine wave ocean
	for (let i = 0; i < interval; i += 50) {
		vertex(i * 2, height / 2 + cos(a + i) * 15.0);
	}
	// drawing the other verteics to go with the shape
	vertex(width * 2, height);
	for (let i = 0; i < interval; i += 50) {
		vertex(i * 2, height * 2 + sin(a + i) * 20.0);
	}
	vertex(-3, height * 2);
	endShape();
	// increamenting the sine wave
	a = a + inc;
}
