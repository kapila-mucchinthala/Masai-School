function runProgram(input) {
      var data = input.split(" ");
      var res = "";
      for (var i = data.length - 1; i >= 0; i--) {
            res += data[i] + " ";
      }

      console.log(res);   
      
}

 
if (process.env.USER === "kishore") {
    runProgram(`A Transformation in education`);
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
