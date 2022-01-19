function runProgram(input) {
    var newInput = input.split("\n");
    var cases = newInput[0];
    for (var i = 0; i <=  cases ; i = i + 2) {
        var line = newInput[i + 1];
        var data = newInput[i + 2].split(" ").map(Number);

        function behaviour() {
            var count = false;
            for (var j = 0; j < data.length; j++) {
                if ((data[j] % 2 != 0) && (data[j + 1] % 2 != 0) && (data[j + 2] % 2 != 0)) {
                    count = true;
        
                }
                else {
                    count = false;
                }
            }
            if (count == false) {
                return "Misbehave!";
            }
            else if (count == true) {
                return "Behave!";
            }
        }
    
        console.log(behaviour());
    }
   
}

if (process.env.USER === "kishore") {
    runProgram(`2
6
1 3 3 4 5 6
5
1 2 3 4 5`);
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