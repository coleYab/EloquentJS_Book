class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return `Vector x: ${this.x}, y: ${this.y}`;
    }

    distance(x = 0, y = 0) {
        return Math.sqrt(Math.pow(this.x - x, 2) + Math.pow(this.y - y, 2));
    }
};

const vector = new Vector(1, 2);
console.log(vector);
console.log(vector.distance())
