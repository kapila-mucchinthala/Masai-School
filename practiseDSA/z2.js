function runProgram(input) {
      var newInput = input.split("\n");
      var cases = Number(newInput[0]);
      for (var i = 1; i <=cases; i++) {
            var data = newInput[i].split("");
            

            function excelColumnNumber() {
      
                  result = "";
                  var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                  for (var a = 0; a < data.length; a++) {
                        for (b = 0; b < alpha.length; b++) {
                              if (data[a] == alpha[b]) {
                                    result += b + 1;
                              }
                        }
                        
                  }
                  return result
            }
            console.log(excelColumnNumber());
      }

}

if (process.env.USER === "kishore") {
    runProgram(`3
A
AB
ZY`);
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
