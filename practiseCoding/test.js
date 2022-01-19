const arr = [1, 2, 3, 4, 5, 6, 7, 8];

Array.prototype.Kmapping = function (callback) {
    let res = [];
    for (let i = 0; i <this.length; i++){
        res.push(callback(this[i]));
    }
    return res;
}

var op = arr.Kmapping(
    function (e) {
        return e + 10;
    }
);
console.log(op);
