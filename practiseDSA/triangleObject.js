var triangle = {
    side1: 3,
    side2: 4,
    hypotenuse: function (el) {
        return (this.side1 ** 2 + this.side2 ** 2);
    }
}
console.log(triangle.hypotenuse());