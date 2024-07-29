class Projectile {
	#position;
	#shape;
	#speed;
	#color;

	constructor(x, y, width, height, speed) {
		this.#position = { x: x, y: y };
		this.#shape = { width: width, height: height };
		this.#speed = speed;
		this.#color = "#f00";
	}

	move() {
		this.#position.y -= this.#speed;
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
