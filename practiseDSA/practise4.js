function runProgram(input) {
    var newInput = input.split("\n");
    var n = newInput[1];
    var data = newInput[2].split("");

    var vowels = "aeiou";
    var consonants = "bcdfghjklmnpqrstvwxyz";
    var res1 = "";
    var res2 = "";

    for (var i = 0; i < n; i++) {
        for (var j = 0; j < vowels.length; j++) {
            if (data[i] == vowels[j]) {
                res1 += data[i];
            }
        }
    }
        for (var i = 0; i < n; i++) {
            for (var j = 0; j < consonants.length; j++) {
                if (data[i] == consonants[j]) {
                    res2 += data[i];
                }
            }
        }
        
    
    console.log(res1 + res2);


}

if (process.env.USER === "kishore") {
    runProgram(`1
6
rutwik`);
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