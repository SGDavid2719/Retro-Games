const Direction = {
	UP: "ArrowUp",
	DOWN: "ArrowDown",
};

class Player {
	#position;
	#score;
	#speed;

	constructor(x, y) {
		this.#position = { x: x - 10, y: (y - 100) / 2 };
		this.#score = 0;
		this.#speed = 20;
	}

	move(direction, canvasHeight, paddleHeight) {
		if (direction === Direction.UP && this.#position.y > 0) {
			this.#position.y -= this.#speed;
		} else if (
			direction === Direction.DOWN &&
			this.#position.y < canvasHeight - paddleHeight
		) {
			this.#position.y += this.#speed;
		}
	}

	get position() {
		return this.#position;
	}

	set position(value) {
		this.#position = value;
	}

	get score() {
		return this.#score;
	}

	set score(value) {
		this.#score = value;
	}
}
