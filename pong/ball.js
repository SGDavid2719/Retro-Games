class Ball {
	#x;
	#y;
	#xSpeed;
	#ySpeed;
	#radius;

	constructor(x, y, xSpeed, ySpeed) {
		this.#x = x;
		this.#y = y;
		this.#xSpeed = xSpeed;
		this.#ySpeed = ySpeed;
		this.#radius = 10;
	}

	reset(canvas) {
		this.#x = canvas.width / 2;
		this.#y = canvas.height / 2;
		this.#xSpeed = -this.#xSpeed;
		this.#ySpeed = 0;
	}

	move() {
		this.#x += this.#xSpeed;
		this.#y += this.#ySpeed;
	}

	checkCollision(canvas, paddle, person, ai) {
		// Ball collision with top and bottom
		if (this.#y + this.#radius > canvas.height || this.#y - this.#radius < 0) {
			this.#ySpeed = -this.#ySpeed;
		}

		// Ball collision with paddles
		if (
			this.#x - this.#radius < paddle.width &&
			this.#y > person.y &&
			this.#y < person.y + paddle.height
		) {
			let collidePoint = this.#y - (person.y + paddle.height / 2);
			collidePoint = collidePoint / (paddle.height / 2);
			let angleRad = (collidePoint * Math.PI) / 4;
			this.#xSpeed = Math.cos(angleRad) * 5;
			this.#ySpeed = Math.sin(angleRad) * 5;
		} else if (
			this.#x + this.#radius > canvas.width - paddle.width &&
			this.#y > ai.y &&
			this.#y < ai.y + paddle.height
		) {
			let collidePoint = this.#y - (ai.y + paddle.height / 2);
			collidePoint = collidePoint / (paddle.height / 2);
			let angleRad = (collidePoint * Math.PI) / 4;
			this.#xSpeed = Math.cos(angleRad) * 5;
			this.#ySpeed = Math.sin(angleRad) * 5;
			this.#xSpeed = -this.#xSpeed;
		}
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

	get xSpeed() {
		return this.#xSpeed;
	}

	set xSpeed(value) {
		this.#xSpeed = value;
	}

	get ySpeed() {
		return this.#ySpeed;
	}

	set ySpeed(value) {
		this.#ySpeed = value;
	}

	get radius() {
		return this.#radius;
	}

	set radius(value) {
		this.#radius = value;
	}
}
