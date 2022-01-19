function runProgram(input) {
      var newInput = input.split("\n");
      var cases = Number(newInput[0]);
      for (var i = 0; i <= 2 * cases - 2; i = i + 2) {
            var line = newInput[i + 1].split(" ").map(Number);
            var data = newInput[i + 2].split(" ").map(Number);
            var k = line[1];

            function differenceOfK() {
                  for (var a = 0; a < data.length; a++) {
                        for (var b = 0; b < data.length; b++) {
                              if (a != b && data[a] - data[b] == k) {
                                    return "Yes"
                              }
                        }
                  }
                  return "No"
            }
            console.log(differenceOfK());
      }

}

if (process.env.USER === "kishore") {
    runProgram(`2
5 3
1 2 3 4 5
5 8
1 2 3 4 5 `);
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
