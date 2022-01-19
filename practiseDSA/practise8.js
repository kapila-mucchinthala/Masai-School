function runProgram(input) {
      var newInput = input.split("\n");
      var cases = newInput[0];
      for (var i = 0; i <= 2 * cases - 2; i = i + 2) {
        var line = newInput[i + 1];
        var data = newInput[i + 2].split(" ").map(Number);
            
            function sumOfEven() {
                  var sum = 0;
                  for (var j = 0; j < data.length; j++) {
                        if (data[j] % 2 == 0) {
                              sum += data[j];
                        }
                  }
                  return sum
            }
            console.log(sumOfEven());
      }

}

if (process.env.USER === "kishore") {
    runProgram(`3
3
1 2 3
5
2 2 2 2 1
3
1 3 2`);
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