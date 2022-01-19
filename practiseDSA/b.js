function runProgram(input) {
  var newInput = input.split("\n");
  var cases = +newInput[0];
  for (var i = 0; i <= 2 * cases - 2; i = i + 2){
    var n = +newInput[i + 1];
    var data = newInput[i + 2].split(" ").map(Number);


    function nextGreatestElement() {
      // console.log(n);
      var res = "";
      for (var a = 0; a < n; a++) {
        let temp = -1;
        for (var b = 0; b < n; b++) {
          if (data[a] < data[b]) {
            temp = data[b];
            break;
          }
        }
        res += temp + " ";
        // console.log(res);

        
      }
      return res;
    }
      console.log(nextGreatestElement());
  }
}
if (process.env.USER === "kishore") {
  runProgram(`1
4
1 3 2 4`);
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