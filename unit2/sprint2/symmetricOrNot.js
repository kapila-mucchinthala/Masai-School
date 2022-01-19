function runProgram(input) {
    var newInput = input.split("\n");
    var n = Number(newInput[1]);
    for (var i = 1; i< newInput.length; i = i + n + 1) {
        n = Number(newInput[i]);
        var matrix = [];
        for (var j = i + 1; j <= i + n; j++) {
            var data = newInput[j].split("").map(Number);
            matrix.push(data);
        }

        function checkSymmetry() {
            if (horizontalSymmetry() == "true" && verticalSymmetry() == "true") {
                return "YES"
            }
            else {
                return "NO"
            }
        }

        console.log(checkSymmetry());

        function horizontalSymmetry() {
            let top = 0;
            let bottom = n - 1;
            while (top < bottom) {
                for (let i = 0; i < n; i++){
                    if (matrix[top][i] != matrix[bottom][i]) {
                        return "false"
                    }
                }
                top++;
                bottom--;
            }
              return "true"
        }
       //console.log(horizontalSymmetry());

        function verticalSymmetry() {
            let left = 0;
            let right = n - 1;
            while (left < right) {
                for (let i = 0; i < n; i++){
                    if (matrix[i][left]!= matrix[i][right]) {
                        return "false"
                    }
                }
                left++;
                right--;
            }
              return "true"
        }
        
     // console.log(verticalSymmetry());

       
    }
}

if (process.env.USER === "kishore") {
    runProgram(`5
2
11
11
4
0101
0110
0110
0101
4
1001
0000
0000
1001
5
01110
01010
10001
01010
01110
5
00100
01010
10001
01010
01110`);
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