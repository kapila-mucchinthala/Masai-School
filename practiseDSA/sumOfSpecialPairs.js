function runProgram(input) {
    var newInput = input.split("\n");
    var data = newInput[1].split(" ").map(Number);
    var n = data.length;

    var result = 0;
    for (var i = 0; i < n; i++) {
        for (var j = i+1; j < n; j++) {
            if (i < j && prime((j-i)) == "True") {
                result += Math.abs(data[i] - data[j]);
                  //  console.log(result);

            }
        }
    }
    console.log(result);

    function prime(x) {
        var count = 0;
        for (var k = 1; k <= x; k++) {
            if (x % k == 0) {
                count++;
            }
        }
        if (count == 2) {
            return "True"
        }

        return "False"
    }

}

if (process.env.USER === "kishore") {
    runProgram(`6
1 2 3 5 7 12`);
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