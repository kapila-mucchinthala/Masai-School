function runProgram(input) {
    var data = input.split("");
    var top = -1;
    var stack= [];
    for (var i = 0; i < data.length; i++) {
        if (top == -1) {
            stack.push(data[i]);
            top++;
        }
        else if (data[i] !== stack[top]) {
            stack.push(data[i]);
            top++;
        }
    }
    console.log(stack.join(''));
    
}

if (process.env.USER === "kishore") {
    runProgram(`aaabccddd`);
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
