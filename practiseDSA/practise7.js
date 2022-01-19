function runProgram(input) {
    var newInput = input.split("\n");
    for (var i = 0; i < newInput.length; i = i + 2) {
        var line = newInput[i];
        var data = newInput[i + 1].split(" ").map(Number);
        var n = data.length;
          

        function oddArrayTraversal() {
            var result = "";
            for (var i = 0; i < n; i++) {
                if (i % 2 == 1) {
                    result += data[i] + " ";
                }
            }
            return result;
        }
        console.log(oddArrayTraversal());
    }
}

if (process.env.USER === "kishore") {
    runProgram(`5
1 2 3 4 5
5
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