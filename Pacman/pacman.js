class Pacman {
    #x;
    #y;
    #lives;

    constructor(x, y) {
        this.#x = x;
        this.#y = y;
        this.#lives = 3;
    }

    move() {
        // TODO
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
}
