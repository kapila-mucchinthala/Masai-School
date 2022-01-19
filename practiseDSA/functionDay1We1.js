
function arrayProduct(items) {
    var prod = 1;
    for (var i = 0; i < items.length; i++) {
        prod = prod * items[i];
    }
    return prod
}
function arrayProdDivide(items, prod) {
    var prodDivide = [];
    for (var i = 0; i < items.length; i++) {
        prodDivide.push(prod / items[i]);
    }
    return prodDivide
}
function printArray(items) {
    var output = "";
    for (var i = 0; i < items.length; i++) {
        output = output + items[i]; 
     if (i != items.length - 1) {
        output = output + " ";
     }
    }
    console.log(output);
}

function runProgram(input) {
    
    var iSplit = input.split("\n ");
    var times = Number(iSplit[0]);
    for (var i = 0; i <= times; i++) {
        var numbers = iSplit[i * 2].split(" ").map(Number);
        var p = arrayProduct(numbers);
        var prodD = arrayProdDivide(numbers, p);
        printArray(prodD)
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/,"")
   runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});