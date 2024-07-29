const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 400;

const ball = new Ball(canvas.width / 2, canvas.height / 2, 5, 0);
const paddle = new Paddle();
const person = new Player(0, (canvas.height - paddle.shape.height) / 2);
const ai = new Player(
	canvas.width - paddle.shape.width,
	(canvas.height - paddle.shape.height) / 2
);

document.addEventListener("keydown", (event) =>
	person.move(event.key, canvas.height, paddle.shape.height)
);

function drawRect(x, y, w, h, color) {
	ctx.fillStyle = color;
	ctx.fillRect(x, y, w, h);
}

function drawCircle(x, y, r, color) {
	ctx.fillStyle = color;
	ctx.beginPath();
	ctx.arc(x, y, r, 0, Math.PI * 2, false);
	ctx.closePath();
	ctx.fill();
}

function drawNet() {
	for (let i = 0; i < canvas.height; i += 20) {
		drawRect(canvas.width / 2 - 1, i, 2, 10, "#fff");
	}
}

function draw() {
	drawRect(0, 0, canvas.width, canvas.height, "#000");
	drawNet();
	drawRect(
		0,
		person.position.y,
		paddle.shape.width,
		paddle.shape.height,
		"#fff"
	);
	drawRect(
		canvas.width - paddle.shape.width,
		ai.position.y,
		paddle.shape.width,
		paddle.shape.height,
		"#fff"
	);
	drawCircle(ball.position.x, ball.position.y, ball.radius, "#fff");
	drawScores();
}

function drawScores() {
	ctx.font = "32px Sans-serif";
	ctx.fillStyle = "#49a881";
	ctx.fillText(person.score, canvas.width / 4, 50);
	ctx.fillStyle = "#ff6f61";
	ctx.fillText(ai.score, (3 * canvas.width) / 4, 50);
}

function update() {
	ball.move();

	ball.checkCollision(canvas, paddle, person, ai);

	// Reset ball if it goes out of bounds and update scores
	if (ball.position.x - ball.radius < 0) {
		ai.score++;
		ball.reset(canvas.width / 2, canvas.height / 2);
	} else if (ball.position.x + ball.radius > canvas.width) {
		person.score++;
		ball.reset(canvas.width / 2, canvas.height / 2);
	}

	// Simple AI to follow the ball
	if (ball.position.y > ai.position.y + paddle.shape.height / 2) {
		ai.position.y += 2;
	} else {
		ai.position.y -= 2;
	}

	draw();
}

(function gameLoop() {
	update();
	requestAnimationFrame(gameLoop);
})();
