function runProgram(input) {
    var newInput = input.split("\n");
    var cases = Number(newInput[0]);
    for (var i = 1; i <= 3*cases-2; i = i + 3) {
        var data = newInput[i + 1].split(" ").map(Number);
        var k = Number(newInput[i + 2]);

        var result = 0;
        for (var a = 0; a < data.length; a++) {
            if (data[a] < k) {
                if (prime(data[a]) == "True") {
                    result += data[a];
                }
            }
        }
        console.log(result);

        function prime(x) {
            var count = 0;
            for (var j = 1; j <=x; j++) {
                if (x % j == 0) {
                    count++;
                }
            }
            if (count == 2) {
                return "True"
            }
            else {
                return "False"
            }
        }

    }

}

if (process.env.USER === "kishore") {
    runProgram(`1
    5
    1 2 3 4 5
    10`);
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