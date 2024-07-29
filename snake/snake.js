const Direction = {
	UP: "Up",
	DOWN: "Down",
	LEFT: "Left",
	RIGHT: "Right",
	NONE: "None",
};
class Snake {
	#position;
	#direction;
	#speed;
	#total;
	#tail;

	constructor(x, y, scale) {
		this.#position = { x: x, y: y };
		this.#direction = Direction.NONE;
		this.#speed = { x: scale, y: 0 };
		this.#total = 0;
		this.#tail = [];
	}

	update(canvas, scale) {
		for (let i = 0; i < this.#tail.length - 1; i++) {
			this.#tail[i] = this.#tail[i + 1];
		}

		this.#tail[this.#total - 1] = { x: this.#position.x, y: this.#position.y };

		this.#position.x += this.#speed.x;
		this.#position.y += this.#speed.y;

		if (this.#position.x >= canvas.width) {
			this.#position.x = 0;
		}

		if (this.#position.y >= canvas.height) {
			this.#position.y = 0;
		}

		if (this.#position.x < 0) {
			this.#position.x = canvas.width - scale;
		}

		if (this.#position.y < 0) {
			this.#position.y = canvas.height - scale;
		}
	}

	draw(ctx, scale) {
		ctx.fillStyle = "#31644f";
		for (let i = 0; i < this.#tail.length; i++) {
			ctx.fillRect(this.#tail[i].x, this.#tail[i].y, scale, scale);
		}
		ctx.fillRect(this.#position.x, this.#position.y, scale, scale);
	}

	changeDirection(direction, scale) {
		switch (direction) {
			case "Up":
				if (this.#speed.y === 0) {
					this.#speed.x = 0;
					this.#speed.y = -scale;
				}
				break;
			case "Down":
				if (this.#speed.y === 0) {
					this.#speed.x = 0;
					this.#speed.y = scale;
				}
				break;
			case "Left":
				if (this.#speed.x === 0) {
					this.#speed.x = -scale;
					this.#speed.y = 0;
				}
				break;
			case "Right":
				if (this.#speed.x === 0) {
					this.#speed.x = scale;
					this.#speed.y = 0;
				}
				break;
		}
	}

	checkCollision() {
		let isCollision = false;
		for (let i = 0; i < this.#tail.length; i++) {
			if (
				this.#position.x === this.#tail[i].x &&
				this.#position.y === this.#tail[i].y
			) {
				this.#total = 0;
				this.#tail = [];
				isCollision = true;
			}
		}
		return isCollision;
	}

	eat(fruit) {
		if (
			this.#position.x === fruit.position.x &&
			this.#position.y === fruit.position.y
		) {
			this.#total++;
			return true;
		}

		return false;
	}

	get position() {
		return this.#position;
	}

	set position(value) {
		this.#position = value;
	}

	get direction() {
		return this.#direction;
	}

	set direction(value) {
		this.#direction = value;
	}
}
