function setup() {
	createCanvas(500,500)
}


var paddle = {
	x: 0,
	y: 200,
	w: 20,
	h: 70
}

var paddle2 = {
	x: 480,
	y: 200,
	w: 20,
	h: 70
}

var ball = {
	x: 250,
	y: 240,
	w: 20,
	h: 20
}

var sped = 40

var xspeed = 6
var yspeed = 4

var score = 0
var score2 = 0

function draw() {


	background(0)


	rect(paddle.x,paddle.y,paddle.w,paddle.h)
	rect(paddle2.x,paddle2.y,paddle2.w,paddle2.h)
	
	ellipse(ball.x,ball.y,ball.w,ball.h)

	stroke(255, 255, 255);
	strokeWeight(3)
	line(250,0,250,500);


	textSize(20)
	text("Score: " + score,15,25)
		

	textSize(20)
	text("Score: " + score2,400,25)

	if (ball.x <= paddle.x + paddle.w) {
		if (ball.y >= paddle.y && ball.y <= paddle.y + paddle.h) {
			xspeed = -xspeed
		};
	};	

	if (ball.x >= paddle2.x) {
		if (ball.y >= paddle2.y && ball.y <= paddle2.y + paddle2.h) {
			xspeed = -xspeed
		};
	};	

	ball.x += xspeed
	ball.y += yspeed

	if (ball.x >= 500) {
		xspeed = -xspeed
		score += 1
	};
	if (ball.x <= 0) {
		xspeed = -xspeed
		score2 += 1
	};
	if (ball.y >= 500) {
		yspeed = -yspeed
	};
	if (ball.y <= 0) {
		yspeed = -yspeed
	};
}



function keyPressed(){

	if (key == "w") {
		paddle.y -= sped	
	};
	if (key == "s") {
		paddle.y += sped	
	};

	if (keyCode == UP_ARROW) {
		paddle2.y -= sped
	};

	if (keyCode == DOWN_ARROW) {
		paddle2.y += sped
	};


	if (paddle.y + paddle.h >= 500) {
		paddle.y = 430
	};


	if (paddle.y <= 0) {
		paddle.y = 0
	};

	if (paddle2.y + paddle2.h >= 500) {
		paddle2.y = 430
	};


	if (paddle2.y <= 0) {
		paddle2.y = 0
	};


}