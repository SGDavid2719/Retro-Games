class Ball {
	#position;
	#speed;
	#radius;

	constructor(x, y, xSpeed, ySpeed) {
		this.#position = { x: x, y: y };
		this.#speed = { x: xSpeed, y: ySpeed };
		this.#radius = 10;
	}

	reset(newX, newY) {
		this.#position = { x: newX, y: newY };
		this.#speed = { x: -this.#speed.x, y: 0 };
	}

	move() {
		this.#position.x += this.#speed.x;
		this.#position.y += this.#speed.y;
	}

	checkCollision(canvas, paddle, person, ai) {
		// Ball collision with top and bottom
		if (
			this.#position.y + this.#radius > canvas.height ||
			this.#position.y - this.#radius < 0
		) {
			this.#speed.y = -this.#speed.y;
		}

		// Ball collision with paddles
		if (
			this.#position.x - this.#radius < paddle.shape.width &&
			this.#position.y > person.position.y &&
			this.#position.y < person.position.y + paddle.shape.height
		) {
			let collidePoint =
				this.#position.y - (person.position.y + paddle.shape.height / 2);
			collidePoint = collidePoint / (paddle.shape.height / 2);
			let angleRad = (collidePoint * Math.PI) / 4;
			this.#speed.x = Math.cos(angleRad) * 5;
			this.#speed.y = Math.sin(angleRad) * 5;
		} else if (
			this.#position.x + this.#radius > canvas.width - paddle.shape.width &&
			this.#position.y > ai.position.y &&
			this.#position.y < ai.position.y + paddle.shape.height
		) {
			let collidePoint =
				this.#position.y - (ai.position.y + paddle.shape.height / 2);
			collidePoint = collidePoint / (paddle.shape.height / 2);
			let angleRad = (collidePoint * Math.PI) / 4;
			this.#speed.x = Math.cos(angleRad) * 5;
			this.#speed.y = Math.sin(angleRad) * 5;
			this.#speed.x = -this.#speed.x;
		}
	}

	get position() {
		return this.#position;
	}

	set position(value) {
		this.#position = value;
	}

	get speed() {
		return this.#speed;
	}

	set speed(value) {
		this.#speed = value;
	}

	get radius() {
		return this.#radius;
	}

	set radius(value) {
		this.#radius = value;
	}
}
