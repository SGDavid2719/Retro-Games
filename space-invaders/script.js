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
const controls = {
	rightPressed: false,
	leftPressed: false,
	spacePressed: false,
};

document.addEventListener(
	"keydown",
	(event) => {
		if (event.key == "Right" || event.key == "ArrowRight") {
			controls.rightPressed = true;
		} else if (event.key == "Left" || event.key == "ArrowLeft") {
			controls.leftPressed = true;
		} else if (event.key == " " || event.key == "Spacebar") {
			controls.spacePressed = true;
		}
	},
	false
);

document.addEventListener(
	"keyup",
	(event) => {
		if (event.key == "Right" || event.key == "ArrowRight") {
			controls.rightPressed = false;
		} else if (event.key == "Left" || event.key == "ArrowLeft") {
			controls.leftPressed = false;
		} else if (event.key == " " || event.key == "Spacebar") {
			controls.spacePressed = false;
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
	if (controls.spacePressed) {
		const width = 5;
		const height = 10;

		projectiles.push(
			new Projectile(
				player.position.x + player.shape.width / 2 - width / 2,
				player.position.y + player.shape.height - height,
				width,
				height,
				7
			)
		);

		controls.spacePressed = false;
	}
}

function drawPlayer() {
	ctx.beginPath();
	ctx.moveTo(
		player.position.x + player.shape.width / 2,
		player.position.y + +player.shape.height
	);
	ctx.fillStyle = player.color;
	ctx.lineTo(player.position.x, player.position.y);
	ctx.lineTo(player.position.x + player.shape.width, player.position.y);
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
			projectile.position.x,
			projectile.position.y,
			projectile.shape.width,
			projectile.shape.height
		);
	}
}

function drawEnemies() {
	for (let column = 0; column < enemyColumnCount; column++) {
		for (let row = 0; row < enemyRowCount; row++) {
			if (enemies[column][row].alive == 1) {
				const enemy = enemies[column][row];
				ctx.beginPath();
				ctx.rect(
					enemy.position.x,
					enemy.position.y,
					enemy.shape.width,
					enemy.shape.height
				);
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
		if (projectiles[index].position.y < 0) {
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
				const enemyHitEdge = enemies[column][row].moveX(canvas.width);
				if (enemyHitEdge) {
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
						projectile.position.x > enemy.position.x &&
						projectile.position.x < enemy.position.x + enemy.shape.width &&
						projectile.position.y > enemy.position.y &&
						projectile.position.y < enemy.position.y + enemy.shape.height
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
				enemy.position.y + enemy.shape.height >=
					canvas.height - player.shape.height
			) {
				gameOver = true;
				return;
			}
		}
	}
}

function update() {
	player.move(controls.rightPressed, controls.leftPressed, canvas.width);
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
