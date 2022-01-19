function runProgram(input) {
    var newInput = input.split("\n");
    var data = newInput[1].split(" ").map(Number);
    var res = 0;
    var count = 1;

    for (var i = 0; i < data.length; i++) {

        if (data[i] % 2 != 0) {
            if (data[i] == data[i + 1]) {
                count++;
                //console.log(count);
            }
            else if (count > res) {
                res = count;
                count = 1;
            }
        }
                
       // console.log(count);
    }
   console.log(res);

}

if (process.env.USER === "kishore") {
    runProgram(`12
2 2 1 2 2 2`);
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
