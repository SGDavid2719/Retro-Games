const mapData = [
    [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1,
    ],
    [
        1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2,
        2, 2, 2, 2, 1,
    ],
    [
        1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1,
        1, 1, 1, 2, 1,
    ],
    [
        1, 3, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1,
        1, 1, 1, 3, 1,
    ],
    [
        1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1,
        1, 1, 1, 2, 1,
    ],
    [
        1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
        2, 2, 2, 2, 1,
    ],
    [
        1, 2, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1,
        1, 1, 1, 2, 1,
    ],
    [
        1, 2, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1,
        1, 1, 1, 2, 1,
    ],
    [
        1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2,
        2, 2, 2, 2, 1,
    ],
    [
        1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1,
        1, 1, 1, 1, 1,
    ],
    [
        0, 0, 0, 0, 0, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1,
        0, 0, 0, 0, 0,
    ],
    [
        0, 0, 0, 0, 0, 1, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 1,
        0, 0, 0, 0, 0,
    ],
    [
        0, 0, 0, 0, 0, 1, 2, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 2, 1,
        0, 0, 0, 0, 0,
    ],
    [
        1, 1, 1, 1, 1, 1, 2, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 2, 1,
        1, 1, 1, 1, 1,
    ],
    [
        0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0,
        0, 0, 0, 0, 0,
    ],
    [
        0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0,
        0, 0, 0, 0, 0,
    ],
    [
        1, 1, 1, 1, 1, 1, 2, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 2, 1,
        1, 1, 1, 1, 1,
    ],
    [
        0, 0, 0, 0, 0, 1, 2, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 2, 1,
        0, 0, 0, 0, 0,
    ],
    [
        0, 0, 0, 0, 0, 1, 2, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 2, 1,
        0, 0, 0, 0, 0,
    ],
    [
        0, 0, 0, 0, 0, 1, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 1,
        0, 0, 0, 0, 0,
    ],
    [
        1, 1, 1, 1, 1, 1, 2, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 2, 1,
        1, 1, 1, 1, 1,
    ],
    [
        1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2,
        2, 2, 2, 2, 1,
    ],
    [
        1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1,
        1, 1, 1, 2, 1,
    ],
    [
        1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1,
        1, 1, 1, 2, 1,
    ],
    [
        1, 3, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,
        1, 2, 2, 3, 1,
    ],
    [
        1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1,
        1, 2, 1, 1, 1,
    ],
    [
        1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 2, 2,
        2, 2, 2, 2, 1,
    ],
    [
        1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 2, 1,
    ],
    [
        1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 2, 1,
    ],
    [
        1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
        2, 2, 2, 2, 1,
    ],
    [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1,
    ],
];

const canvas = document.getElementById("can");
const context = canvas.getContext("2d");
const blockWidth = canvas.width / 29;
const blockHeight = canvas.height / 31;
const pacman = new Pacman(14, 19);
let points = 0;

window.addEventListener("keydown", (event) => {
    if (event.code === "ArrowRight") {
        pacman.direction = Direction.RIGHT;
    } else if (event.code === "ArrowLeft") {
        pacman.direction = Direction.LEFT;
    } else if (event.code === "ArrowUp") {
        pacman.direction = Direction.UP;
    } else if (event.code === "ArrowDown") {
        pacman.direction = Direction.DOWN;
    }
});

function drawBlock(cellX, cellY, blockWidth, blockHeight) {
    context.fillStyle = "blue";
    context.fillRect(cellX, cellY, blockWidth, blockHeight);
}

function getFillStyle(ballType) {
    let fillStyle = "yellow";
    if (ballType === 3) {
        fillStyle = "red";
    } else if (ballType === 4) {
        fillStyle = "green";
    }
    return fillStyle;
}

function drawBall(cellX, cellY, blockWidth, ballType) {
    const ballRadius = blockWidth / 10;
    const ballX = cellX + ballRadius * 5;
    const ballY = cellY + ballRadius * 2;

    context.fillStyle = getFillStyle(ballType);
    context.beginPath();
    context.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
    context.fill();
}

function drawMap() {
    let cellX = 0;
    let cellY = 0;

    mapData.forEach((row) => {
        row.forEach((cell) => {
            if (cell === 1) {
                drawBlock(cellX, cellY, blockWidth, blockHeight);
            } else if (cell === 2 || cell === 3) {
                drawBall(cellX, cellY, blockWidth, cell);
            }
            cellX += blockWidth;
        });
        cellX = 0;
        cellY += blockHeight;
    });
}

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
}

function updateMap() {
    mapData[pacman.y][pacman.x] = 0;
    points++;
}

function drawGame() {
    clearCanvas();
    pacman.move(mapData);
    const foundPoint = pacman.checkPoint(mapData);
    if (foundPoint) {
        updateMap();
    }
    drawMap();
    drawBall(pacman.x * blockWidth, pacman.y * blockHeight, blockWidth, 4);

    requestAnimationFrame(drawGame);
}

drawGame();
