function runProgram(input) {
      var number = +input;

      var steps1 = number % 5;
      var steps2 = Math.floor(number/5);
      console.log(steps2+steps1);
     
}

if (process.env.USER === "kishore") {
    runProgram(`26`);
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


