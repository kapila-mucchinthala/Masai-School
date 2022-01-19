function runProgram(input) {
      var newInput = input.split("\n");
      var n = +newInput[0];
      var data = newInput[1].split(" ").map(Number);

      var arr = [];
      for (var a = 0; a < data.length; a++){
            arr.push([data[a], a]);
      }

      for (var i = 0; i < arr.length; i++){
            for (var j = 0; j < arr.length-i-1; j++) {
                  if (arr[j][0] > arr[j+1][0]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                  }
            }
      }
      var index = [];
      for (var k = 0; k < arr.length; k++) {
            index.push(arr[k][1]);
            arr[k] = arr[k][0];
      }

      console.log(index.join(" "));



    
     
}

if (process.env.USER === "kishore") {
    runProgram(`5
4 5 3 7 1`);
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


