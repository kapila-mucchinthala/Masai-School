function runProgram(input) {
    var newInput = input.split("\n");
    var n = Number(newInput[1]);
    for (var i = 1; i < newInput.length; i = i + n + 1) {
        n = Number(newInput[i]);
        var matrix = [];
        for (var j = i + 1; j <= i + n; j++) {
            var data = newInput[j].split(" ").map(Number);
            matrix.push(data);
        }
       
        
           
        
        
    }
}

if (process.env.USER === "kishore") {
    runProgram(``);
} else {
        process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
        read += input;
  });
  process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}