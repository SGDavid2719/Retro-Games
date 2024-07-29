class Piece {
	#tetromino;
	#color;
	#tetrominoPatternNumber;
	#tetrominoPattern;
	#position;

	constructor() {
		const randomNumber = Math.floor(Math.random() * TETRIMINOES.length);
		const tetrominoNumber = randomNumber === 0 ? 1 : randomNumber;

		this.#position = { x: 3, y: -2 };
		this.#tetromino = TETRIMINOES[tetrominoNumber][0];
		this.#color = TETRIMINOES[tetrominoNumber][1];
		this.#tetrominoPatternNumber = 0;
		this.#tetrominoPattern = this.#tetromino[this.#tetrominoPatternNumber];
	}

	fill(color, drawSquare) {
		for (let row = 0; row < this.#tetrominoPattern.length; row++) {
			for (let column = 0; column < this.#tetrominoPattern.length; column++) {
				if (this.#tetrominoPattern[row][column]) {
					drawSquare(this.#position.x + column, this.#position.y + row, color);
				}
			}
		}
	}

	draw(drawSquare) {
		this.fill(this.color, drawSquare);
	}

	unDraw(drawSquare) {
		this.fill(TETRIMINOES[0][1], drawSquare);
	}

	moveDown(COL, ROW, drawSquare) {
		let isCollision = false;
		let numberOfFullRows = 0;
		if (!this.collision(0, 1, this.#tetrominoPattern, COL, ROW)) {
			this.unDraw(drawSquare);
			this.#position.y++;
			this.draw(drawSquare);
		} else {
			numberOfFullRows = this.lock(COL, ROW);
			isCollision = true;
		}
		return { isCollision, numberOfFullRows };
	}

	moveRight(COL, ROW, drawSquare) {
		if (!this.collision(1, 0, this.#tetrominoPattern, COL, ROW)) {
			this.unDraw(drawSquare);
			this.#position.x++;
			this.draw(drawSquare);
		}
	}

	moveLeft(COL, ROW, drawSquare) {
		if (!this.collision(-1, 0, this.#tetrominoPattern, COL, ROW)) {
			this.unDraw(drawSquare);
			this.#position.x--;
			this.draw(drawSquare);
		}
	}

	rotate(COL, ROW, drawSquare) {
		let nextPattern =
			this.#tetromino[
				(this.#tetrominoPatternNumber + 1) % this.#tetromino.length
			];
		let kick = 0;

		if (this.collision(0, 0, nextPattern, COL, ROW)) {
			if (this.#position.x > COL / 2) {
				kick = -1;
			} else {
				kick = 1;
			}
		}

		if (!this.collision(kick, 0, nextPattern, COL, ROW)) {
			this.unDraw(drawSquare);
			this.x += kick;
			this.#tetrominoPatternNumber =
				(this.#tetrominoPatternNumber + 1) % this.#tetromino.length;
			this.#tetrominoPattern = nextPattern;
			this.draw(drawSquare);
		}
	}

	collision(x, y, piece, COL, ROW) {
		for (let row = 0; row < piece.length; row++) {
			for (let column = 0; column < piece.length; column++) {
				if (!piece[row][column]) {
					continue;
				}

				let newX = this.#position.x + column + x;
				let newY = this.#position.y + row + y;

				if (newX < 0 || newX >= COL || newY >= ROW) {
					return true;
				}
				if (newY < 0) {
					continue;
				}
				if (board[newY][newX] != TETRIMINOES[0][1]) {
					return true;
				}
			}
		}
		return false;
	}

	lock(COL, ROW) {
		for (let row = 0; row < this.#tetrominoPattern.length; row++) {
			for (let column = 0; column < this.#tetrominoPattern.length; column++) {
				if (!this.#tetrominoPattern[row][column]) {
					continue;
				}
				if (this.#position.y + row < 0) {
					break;
				}
				board[this.#position.y + row][this.#position.x + column] = this.#color;
			}
		}
		let numberOfFullRows = 0;
		for (let row = 0; row < ROW; row++) {
			let isRowFull = true;
			for (let column = 0; column < COL; column++) {
				isRowFull = isRowFull && board[row][column] != TETRIMINOES[0][1];
			}
			if (isRowFull) {
				numberOfFullRows += 1;
				for (let y = row; y > 1; y--) {
					for (let column = 0; column < COL; column++) {
						board[y][column] = board[y - 1][column];
					}
				}
				for (let column = 0; column < COL; column++) {
					board[0][column] = TETRIMINOES[0][1];
				}
			}
		}
		return numberOfFullRows;
	}

	get position() {
		return this.#position;
	}

	set position(value) {
		this.#position = value;
	}

	get tetromino() {
		return this.#tetromino;
	}

	set tetromino(value) {
		this.#tetromino = value;
	}

	get color() {
		return this.#color;
	}

	set color(value) {
		this.#color = value;
	}

	get tetrominoPatternNumber() {
		return this.#tetrominoPatternNumber;
	}

	set tetrominoPatternNumber(value) {
		this.#tetrominoPatternNumber = value;
	}

	get tetrominoPattern() {
		return this.#tetrominoPattern;
	}

	set tetrominoPattern(value) {
		this.#tetrominoPattern = value;
	}
}
