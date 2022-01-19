 
 function runProgram(input) {
     var newInput = input.split("\n"); 
     var line1 = newInput[0].split("").sort().join("").trim();
     var line2 = newInput[1].split("").sort().join("").trim();
     var result = "";

     if (line1 == line2) {
         result += "True";
     }
     else {
         result += "False";
     }
     console.log(result);

}


if (process.env.USER === "kishore") {
    runProgram(`anagram
nag a ram`);
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