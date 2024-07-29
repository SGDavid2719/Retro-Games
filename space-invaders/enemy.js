class Enemy {
	#width;
	#height;
	#speed;
	#x;
	#y;
	#alive;
	#color;

	constructor(x, y, width, height, speed) {
		this.#x = x;
		this.#y = y;
		this.#width = width;
		this.#height = height;
		this.#speed = speed;
		this.#alive = 1;
		this.#color = "#0f0";
	}

	moveX(canvasWidth) {
		let hitEdge = false;
		this.#x += this.#speed;
		if (this.#x + this.#width > canvasWidth || this.#x < 0) {
			hitEdge = true;
		}
		return hitEdge;
	}

	moveY() {
		this.#speed = -this.#speed;
		this.#y += this.#height / 2;
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
