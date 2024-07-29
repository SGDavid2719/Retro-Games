class Player {
	#width;
	#height;
	#speed;
	#x;
	#y;
	#color;

	constructor(x, y, width, height, speed) {
		this.#x = (x - width) / 2;
		(this.#y = y - height), (this.#width = width - 10);
		this.#height = (height - 100) / 2;
		this.#speed = speed;
		this.#color = "#555";
	}

	move(rightPressed, leftPressed, canvasWidth) {
		if (rightPressed && this.#x < canvasWidth - this.#width) {
			this.#x += this.#speed;
		} else if (leftPressed && this.#x > 0) {
			this.#x -= this.#speed;
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

	get width() {
		return this.#width;
	}

	set width(value) {
		this.#width = value;
	}

	get height() {
		return this.#height;
	}

	set height(value) {
		this.#height = value;
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
