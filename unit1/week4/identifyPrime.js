function runProgram(input) {
    var data = Number(input);
    var prime = true;
  for (var i = 2; i < data; i++){
    
      if (data % i == 0) {
        prime = false;
          break;
        }
    }
    if (prime) {
    console.log("Yes")
     } else {
    console.log("No");
     }

}

if (process.env.USER === "kishore") {
    runProgram(`13`);
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