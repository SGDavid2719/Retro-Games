const Direction = {
	UP: "ArrowUp",
	DOWN: "ArrowDown",
};

class Player {
	#x;
	#y;
	#score;
	#speed;

	constructor(x, y) {
		this.#x = x - 10;
		this.#y = (y - 100) / 2;
		this.#score = 0;
		this.#speed = 20;
	}

	move(direction, canvasHeight, paddleHeight) {
		if (direction === Direction.UP && this.#y > 0) {
			this.#y -= this.#speed;
		} else if (
			direction === Direction.DOWN &&
			this.#y < canvasHeight - paddleHeight
		) {
			this.#y += this.#speed;
		}
	}

	get x() {
		return this.#x;
	}

	set x(value) {
		this.#x = value;
	}

	get y() {
		return this.#y;
	}

	set y(value) {
		this.#y = value;
	}

	get score() {
		return this.#score;
	}

	set score(value) {
		this.#score = value;
	}
}
