function runProgram(input) {
    var newInput = input.split("\n");
  var cases = +newInput[0];
  for (var i = 0; i <= 2 * cases - 2; i = i + 2){
    var n = +newInput[i + 1];
    var data = newInput[i + 2].split(" ").map(Number);

    function NSGSum() {
      for (var a = 0; a < data.length; a++){
        var count = 0;
        for (var b = 0; b < data.length; b++){
          if (data[a] < data[b] & count<1) {
            count++;
            // var count2 = 0;
            var sum = "";
            for (var c = b; c < data.length; c++){
              if (data[c] > data[c + 1]) {
                  // count2++;
                  console.log(data[c+ 1]);
                  sum += data[c + 1] + " ";
                  
                }
                
              
            }
          }
        }
      }
      return sum;
    }

    console.log(NSGSum());
  }
      


}

if (process.env.USER === "kishore") {
    runProgram(`1
6
5 1 6 2 5 1`);
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