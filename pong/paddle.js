class Paddle {
	#width;
	#height;

	constructor() {
		this.#width = 10;
		this.#height = 100;
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
}
