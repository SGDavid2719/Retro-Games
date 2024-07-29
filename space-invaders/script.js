const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const scoreElement = document.getElementById("score");

canvas.width = 800;
canvas.height = 600;

const player = new Player(canvas.width, canvas.height, 60, 20, 5);
const enemyRowCount = 5;
const enemyColumnCount = 8;
const enemies = [];
const projectiles = [];
let score = 0;
let gameOver = false;

let rightPressed = false;
let leftPressed = false;
let spacePressed = false;

document.addEventListener(
	"keydown",
	(event) => {
		if (event.key == "Right" || event.key == "ArrowRight") {
			rightPressed = true;
		} else if (event.key == "Left" || event.key == "ArrowLeft") {
			leftPressed = true;
		} else if (event.key == " " || event.key == "Spacebar") {
			spacePressed = true;
		}
	},
	false
);

document.addEventListener(
	"keyup",
	(event) => {
		if (event.key == "Right" || event.key == "ArrowRight") {
			rightPressed = false;
		} else if (event.key == "Left" || event.key == "ArrowLeft") {
			leftPressed = false;
		} else if (event.key == " " || event.key == "Spacebar") {
			spacePressed = false;
		}
	},
	false
);

(function createEnemies() {
	const width = 40;
	const height = 20;
	for (let column = 0; column < enemyColumnCount; column++) {
		enemies[column] = [];
		for (let row = 0; row < enemyRowCount; row++) {
			enemies[column][row] = new Enemy(
				column * (width + 10),
				row * (height + 10) + 10,
				width,
				height,
				1
			);
		}
	}
})();

function createProjectiles() {
	if (spacePressed) {
		const width = 5;
		const height = 10;

		projectiles.push(
			new Projectile(
				player.x + player.width / 2 - width / 2,
				player.y + player.height - height,
				width,
				height,
				7
			)
		);

		spacePressed = false;
	}
}

function drawPlayer() {
	ctx.beginPath();
	ctx.moveTo(player.x + player.width / 2, player.y + +player.height);
	ctx.fillStyle = player.color;
	ctx.lineTo(player.x, player.y);
	ctx.lineTo(player.x + player.width, player.y);
	ctx.fill();
	ctx.closePath();
}

function drawProjectiles() {
	if (projectiles.length > 0) {
		ctx.fillStyle = projectiles[0].color;
	}
	for (let index = 0; index < projectiles.length; index++) {
		const projectile = projectiles[index];
		ctx.fillRect(
			projectile.x,
			projectile.y,
			projectile.width,
			projectile.height
		);
	}
}

function drawEnemies() {
	for (let column = 0; column < enemyColumnCount; column++) {
		for (let row = 0; row < enemyRowCount; row++) {
			if (enemies[column][row].alive == 1) {
				const enemy = enemies[column][row];
				ctx.beginPath();
				ctx.rect(enemy.x, enemy.y, enemy.width, enemy.height);
				ctx.fillStyle = enemy.color;
				ctx.fill();
				ctx.closePath();
			}
		}
	}
}

function drawScore() {
	scoreElement.innerText = `Score: ${score}`;
}

function moveProjectiles() {
	for (let index = 0; index < projectiles.length; index++) {
		projectiles[index].move();
		if (projectiles[index].y < 0) {
			projectiles.splice(index, 1);
			index--;
		}
	}
}

function moveEnemies() {
	let hitEdge = false;
	for (let column = 0; column < enemyColumnCount; column++) {
		for (let row = 0; row < enemyRowCount; row++) {
			if (enemies[column][row].alive == 1) {
				const enemyHittedEdge = enemies[column][row].moveX(canvas.width);
				if (enemyHittedEdge) {
					hitEdge = true;
				}
			}
		}
	}
	if (hitEdge) {
		for (let column = 0; column < enemyColumnCount; column++) {
			for (let row = 0; row < enemyRowCount; row++) {
				enemies[column][row].moveY();
			}
		}
	}
}

function collisionDetection() {
	for (let index = 0; index < projectiles.length; index++) {
		const projectile = projectiles[index];
		for (let column = 0; column < enemyColumnCount; column++) {
			for (let row = 0; row < enemyRowCount; row++) {
				const enemy = enemies[column][row];
				if (enemy.alive == 1) {
					if (
						projectile.x > enemy.x &&
						projectile.x < enemy.x + enemy.width &&
						projectile.y > enemy.y &&
						projectile.y < enemy.y + enemy.height
					) {
						enemy.alive = 0;
						projectiles.splice(index, 1);
						index--;
						score++;
						if (enemies.flat().every((enemy) => enemy.alive === 0)) {
							alert("You won!");
							document.location.reload();
						}
						return;
					}
				}
			}
		}
	}

	for (let column = 0; column < enemyColumnCount; column++) {
		for (let row = 0; row < enemyRowCount; row++) {
			const enemy = enemies[column][row];
			if (
				enemy.alive === 1 &&
				enemy.y + enemy.height >= canvas.height - player.height
			) {
				gameOver = true;
				return;
			}
		}
	}
}

function update() {
	player.move(rightPressed, leftPressed, canvas.width);
	createProjectiles();
	moveProjectiles();
	moveEnemies();
	collisionDetection();
}

(function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawPlayer();
	drawProjectiles();
	drawEnemies();
	drawScore();
	update();
	if (!gameOver) {
		requestAnimationFrame(draw);
	} else {
		alert("Game Over");
		document.location.reload();
	}
})();
