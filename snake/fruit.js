class Fruit {
	#x;
	#y;

	constructor(x, y) {
		this.#x = x;
		this.#y = y;
	}

	pickLocation(rows, columns, scale) {
		this.#x = Math.floor(Math.random() * rows) * scale;
		this.#y = Math.floor(Math.random() * columns) * scale;
	}

	draw(ctx, scale) {
		ctx.fillStyle = "#ff6f61";
		ctx.fillRect(this.#x, this.#y, scale, scale);
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
}
