function runProgram(input) {
    var newInput = input.split("\n");
    var cases = newInput[0];
    for (var i = 0; i <= 2*cases-2; i = i + 2) {
        var line = newInput[i+1].split(" ").map(Number);
        var data = newInput[i + 2].split(" ").map(Number);
        var n = data.length;
        var k = line[1];
        var res = "";
        var res1 = "";
        var res2 = "";

        function rotate() {
            if (k == n) {
                for (var j = 0; j < n; j++) {
                  res += data[j] + " ";
                }
                return res;
            } 
            else if (k < n) {
                for (var j = k; j < n; j++) {
                    res1 += data[j] + " ";
                    //console.log(res1);
                }
                for (var j = 0; j <k; j++) {
                    res2 += data[j] + " ";
                }
                res = res1 + res2;
                return res;
            }
            else if (k > n) {
                k = k % n;
                for (var j = k; j < n; j++) {
                    res1 += data[j] + " ";
                }
                for (var j = 0; j < k; j++) {
                    res2 += data[j] + " ";
                }
                res = res1 + res2;
                return res;
            }        
        }
        console.log(rotate());
    } 
}

if (process.env.USER === "kishore") {
    runProgram(`3
3 1
1 2 3
2 2
1 2
2 3
1 2
`);
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