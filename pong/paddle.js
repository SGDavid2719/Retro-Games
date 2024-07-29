class Paddle {
	#shape;

	constructor() {
		this.#shape = { width: 10, height: 100 };
	}

	get shape() {
		return this.#shape;
	}

	set shape(value) {
		this.#shape = value;
	}
}
