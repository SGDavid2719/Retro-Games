const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

let score = 0;
const scoreElement = document.getElementById("score");

const snake = new Snake(0, 0, scale);
const fruit = new Fruit(0, 0, scale);

window.addEventListener("keydown", (event) => {
	if (event.code === "ArrowRight") {
		snake.changeDirection(Direction.RIGHT, scale);
	} else if (event.code === "ArrowLeft") {
		snake.changeDirection(Direction.LEFT, scale);
	} else if (event.code === "ArrowUp") {
		snake.changeDirection(Direction.UP, scale);
	} else if (event.code === "ArrowDown") {
		snake.changeDirection(Direction.DOWN, scale);
	}
});

(function setup() {
	canvas.width = 400;
	canvas.height = 400;

	fruit.pickLocation(rows, columns, scale);

	window.setInterval(() => {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		snake.update(canvas, scale);
		snake.draw(ctx, scale);
		fruit.draw(ctx, scale);

		if (snake.eat(fruit)) {
			fruit.pickLocation(rows, columns, scale);
			score++;
			scoreElement.innerText = `Score: ${score}`;
		}

		if (snake.checkCollision()) {
			score = 0;
			scoreElement.innerText = `Score: ${score}`;
		}
	}, 250);
})();
