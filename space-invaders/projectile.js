class Projectile {
	#width;
	#height;
	#speed;
	#x;
	#y;
	#color;

	constructor(x, y, width, height, speed) {
		this.#x = x;
		this.#y = y;
		this.#width = width;
		this.#height = height;
		this.#speed = speed;
		this.#color = "#f00";
	}

	move() {
		this.#y -= this.#speed;
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
