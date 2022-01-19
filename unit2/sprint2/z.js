function runProgram(input) {
 var newInput = input.split("\n");
 var cases = Number(newInput[0]);
    for (var i = 0; i <= 2 * cases - 2; i = i + 2) {
        var line = newInput[i + 1].split(" ").map(Number);
        var data = newInput[i + 2].split(" ").map(Number);
        var k = line[1];
       
       
        
    }
}

if (process.env.USER === "kishore") {
    runProgram(`2
5 7
1 2 3 4 5
5 12
1 2 3 4 5`);
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