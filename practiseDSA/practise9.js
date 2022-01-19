function runProgram(input) {
var newInput = input.split("\n");
var cases = newInput[0];
    for (var i = 0; i <= 2 * cases - 2; i = i + 2) {
        var line = newInput[i + 1];
        var data = newInput[i + 2].split(" ").map(Number);    

        function subArrayQuest() {
            var count = 0;
            for (var i = 0; i < data.length; i++) {
                for (var j = i; j < data.length; j++) {
                    if ((data[i] % 2 != 0) && (data[j] % 2 != 0)) {
                        count++;
                    }
                }
            }
            return count;
        }
        console.log(subArrayQuest());
    }
}

if (process.env.USER === "kishore") {
    runProgram(`1
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