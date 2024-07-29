const SCALE = 25;
const ROW = 20;
const COL = 10;

const scoreElement = document.getElementById("score");
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = COL * SCALE;
canvas.height = ROW * SCALE;

const board = (function createBoard() {
	let board = [];
	for (let row = 0; row < ROW; row++) {
		board[row] = [];
		for (let column = 0; column < COL; column++) {
			board[row][column] = "grey";
		}
	}
	return board;
})();

let dropStart = Date.now();
let gameOver = false;
let score = 0;
let piece = createPiece();

function createPiece() {
	return new Piece();
}

document.addEventListener("keydown", (event) => {
	if (event.key === "ArrowLeft") {
		piece.moveLeft(COL, ROW, drawSquare);
	} else if (event.key === "ArrowUp") {
		piece.rotate(COL, ROW, drawSquare);
	} else if (event.key === "ArrowRight") {
		piece.moveRight(COL, ROW, drawSquare);
	} else if (event.key === "ArrowDown") {
		const { isCollision, numberOfFullRows } = piece.moveDown(
			COL,
			ROW,
			drawSquare
		);
		if (numberOfFullRows > 0) {
			score += 10 * numberOfFullRows;
		}
		if (isCollision) {
			drawBoard();
			piece = createPiece();
			gameOver = checkIfGameOver();
		}
	}
});

function drawSquare(x, y, color) {
	ctx.fillStyle = color;
	ctx.fillRect(x * SCALE, y * SCALE, SCALE, SCALE);
	ctx.strokeStyle = "BLACK";
	ctx.strokeRect(x * SCALE, y * SCALE, SCALE, SCALE);
}

function drawBoard() {
	for (let row = 0; row < ROW; row++) {
		for (let column = 0; column < COL; column++) {
			drawSquare(column, row, board[row][column]);
		}
	}
	scoreElement.innerHTML = `Score: ${score}`;
}

function checkIfGameOver() {
	let isGameOver = false;
	for (let column = 0; column < COL; column++) {
		if (board[0][column] !== "grey") {
			isGameOver = true;
			break;
		}
	}
	return isGameOver;
}

drawBoard();
(function game() {
	const now = Date.now();
	const delta = now - dropStart;
	if (delta > 1000) {
		const { isCollision, numberOfFullRows } = piece.moveDown(
			COL,
			ROW,
			drawSquare
		);
		if (numberOfFullRows > 0) {
			score += 10 * numberOfFullRows;
		}
		if (isCollision) {
			drawBoard();
			piece = createPiece();
			gameOver = checkIfGameOver();
		}
		dropStart = Date.now();
	}
	if (!gameOver) {
		requestAnimationFrame(game);
	} else {
		alert("Game Over");
		document.location.reload();
	}
})();
