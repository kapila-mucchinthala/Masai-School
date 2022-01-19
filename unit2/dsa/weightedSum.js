function runProgram(input) {
 var newInput = input.split("\n");
 var cases = Number(newInput[0]);
    for (var i = 0; i <= 2 * cases - 2; i = i + 2) {
        var n = +newInput[i + 1];
        var data = newInput[i + 2].split(" ").map(Number);
        
       
        function weightedSum() {
            var sum = 0;
            for (var a = 0; a < n; a++) {
                sum += (a + 1) * data[a];
            }
            return sum
        }
           
       console.log(weightedSum())
        
    }
}

if (process.env.USER === "kishore") {
    runProgram(`2
5
1 2 3 4 5
2
100 1`);
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