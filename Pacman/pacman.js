const Direction = {
    UP: "Up",
    DOWN: "Down",
    LEFT: "Left",
    RIGHT: "Right",
    NONE: "None",
};
class Pacman {
    #x;
    #y;
    #lives;
    #direction;

    constructor(x, y) {
        this.#x = x;
        this.#y = y;
        this.#lives = 3;
        this.#direction = Direction.NONE;
    }

    checkPoint(mapData) {
        return mapData[this.#y][this.#x] === 2;
    }

    #checkCollision(newX, newY, mapData) {
        return mapData[newY][newX] === 1;
    }

    move(mapData) {
        switch (this.#direction) {
            case Direction.UP:
                this.#y -= this.#checkCollision(this.#x, this.#y - 1, mapData)
                    ? 0
                    : 1;
                break;
            case Direction.DOWN:
                this.#y += this.#checkCollision(this.#x, this.#y + 1, mapData)
                    ? 0
                    : 1;
                break;
            case Direction.RIGHT:
                this.#x += this.#checkCollision(this.#x + 1, this.#y, mapData)
                    ? 0
                    : 1;
                break;
            case Direction.LEFT:
                this.#x -= this.#checkCollision(this.#x - 1, this.#y, mapData)
                    ? 0
                    : 1;
                break;
            case Direction.NONE:
                break;
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

    get lives() {
        return this.#lives;
    }

    set lives(value) {
        this.#lives = value;
    }

    get direction() {
        return this.#direction;
    }

    set direction(value) {
        this.#direction = value;
    }
}
