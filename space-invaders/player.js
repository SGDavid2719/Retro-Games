class Player {
	#position;
	#shape;
	#speed;
	#color;

	constructor(x, y, width, height, speed) {
		this.#position = { x: (x - width) / 2, y: y - height };
		this.#shape = { width: width - 10, height: (height - 100) / 2 };
		this.#speed = speed;
		this.#color = "#555";
	}

	move(rightPressed, leftPressed, canvasWidth) {
		if (rightPressed && this.#position.x < canvasWidth - this.#shape.width) {
			this.#position.x += this.#speed;
		} else if (leftPressed && this.#position.x > 0) {
			this.#position.x -= this.#speed;
		}
	}

	get position() {
		return this.#position;
	}

	set position(value) {
		this.#position = value;
	}

	get shape() {
		return this.#shape;
	}

	set shape(value) {
		this.#shape = value;
	}

	get speed() {
		return this.#speed;
	}

	set speed(value) {
		this.#speed = value;
	}

	get color() {
		return this.#color;
	}

	set color(value) {
		this.#color = value;
	}
}
