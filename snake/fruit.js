class Fruit {
	#position;

	constructor(x, y) {
		this.#position = { x: x, y: y };
	}

	pickLocation(rows, columns, scale) {
		this.#position.x = Math.floor(Math.random() * rows) * scale;
		this.#position.y = Math.floor(Math.random() * columns) * scale;
	}

	draw(ctx, scale) {
		ctx.fillStyle = "#ff6f61";
		ctx.fillRect(this.#position.x, this.#position.y, scale, scale);
	}

	get position() {
		return this.#position;
	}

	set position(value) {
		this.#position = value;
	}
}
