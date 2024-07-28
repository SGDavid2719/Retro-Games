const Direction = {
	UP: "Up",
	DOWN: "Down",
	LEFT: "Left",
	RIGHT: "Right",
	NONE: "None",
};
class Snake {
	#x;
	#y;
	#direction;
	#xSpeed;
	#ySpeed;
	#total;
	#tail;

	constructor(x, y, scale) {
		this.#x = x;
		this.#y = y;
		this.#direction = Direction.NONE;
		this.#xSpeed = scale;
		this.#ySpeed = 0;
		this.#total = 0;
		this.#tail = [];
	}

	update(canvas, scale) {
		for (let i = 0; i < this.#tail.length - 1; i++) {
			this.#tail[i] = this.#tail[i + 1];
		}

		this.#tail[this.#total - 1] = { x: this.#x, y: this.#y };

		this.#x += this.#xSpeed;
		this.#y += this.#ySpeed;

		if (this.#x >= canvas.width) {
			this.#x = 0;
		}

		if (this.#y >= canvas.height) {
			this.#y = 0;
		}

		if (this.#x < 0) {
			this.#x = canvas.width - scale;
		}

		if (this.#y < 0) {
			this.#y = canvas.height - scale;
		}
	}

	draw(ctx, scale) {
		ctx.fillStyle = "#31644f";
		for (let i = 0; i < this.#tail.length; i++) {
			ctx.fillRect(this.#tail[i].x, this.#tail[i].y, scale, scale);
		}
		ctx.fillRect(this.#x, this.#y, scale, scale);
	}

	changeDirection(direction, scale) {
		switch (direction) {
			case "Up":
				if (this.#ySpeed === 0) {
					this.#xSpeed = 0;
					this.#ySpeed = -scale;
				}
				break;
			case "Down":
				if (this.#ySpeed === 0) {
					this.#xSpeed = 0;
					this.#ySpeed = scale;
				}
				break;
			case "Left":
				if (this.#xSpeed === 0) {
					this.#xSpeed = -scale;
					this.#ySpeed = 0;
				}
				break;
			case "Right":
				if (this.#xSpeed === 0) {
					this.#xSpeed = scale;
					this.#ySpeed = 0;
				}
				break;
		}
	}

	checkCollision() {
		let isCollision = false;
		for (let i = 0; i < this.#tail.length; i++) {
			if (this.#x === this.#tail[i].x && this.#y === this.#tail[i].y) {
				this.#total = 0;
				this.#tail = [];
				isCollision = true;
			}
		}
		return isCollision;
	}

	eat(fruit) {
		if (this.#x === fruit.x && this.#y === fruit.y) {
			this.#total++;
			return true;
		}

		return false;
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

	get direction() {
		return this.#direction;
	}

	set direction(value) {
		this.#direction = value;
	}
}
