class Enemy {
	#position;
	#shape;
	#speed;
	#alive;
	#color;

	constructor(x, y, width, height, speed) {
		this.#position = { x: x, y: y };
		this.#shape = { width: width, height: height };
		this.#speed = speed;
		this.#alive = 1;
		this.#color = "#0f0";
	}

	moveX(canvasWidth) {
		let hitEdge = false;
		this.#position.x += this.#speed;
		if (
			this.#position.x + this.#shape.width > canvasWidth ||
			this.#position.x < 0
		) {
			hitEdge = true;
		}
		return hitEdge;
	}

	moveY() {
		this.#speed = -this.#speed;
		this.#position.y += this.#shape.height / 2;
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

	get alive() {
		return this.#alive;
	}

	set alive(value) {
		this.#alive = value;
	}

	get color() {
		return this.#color;
	}

	set color(value) {
		this.#color = value;
	}
}
