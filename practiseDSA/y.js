function runProgram(input) {
      var newInput = input.split("\n");
      var cases = Number(newInput[0]);
      for (var i = 0; i <= 3 * cases - 2; i = i + 3) {
            var n = Number(newInput[i + 1]);
            var data = newInput[i + 2].split(" ").map(Number);
            var k = Number(newInput[i + 3]);

            function pairLessThanK() {
                  var arr = [];
                  var s = 0;
                  for (var a = 0; a < n; a++) {
                        for (var b = a + 1; b < n; b++) {
                              s = data[a] + data[b]; 
                              if (s < k) {
                                    arr.push(s);   
                              }
                        }
                  }
            
                  var temp = arr[0];
                  for (var c = 1; c < arr.length; c++) {
                        if (arr[c]>temp) {
                              temp = arr[c];
                              
                              
                             
                              
                               
                        }
                        
                        

                       
                  }
                 
                 return temp;
                 
             
            }
            
           console.log(pairLessThanK());
      }
           
}

if (process.env.USER === "kishore") {
    runProgram(`2
5
1 2 3 4 5
7
3
30 10 20
15`);
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