function lines2Array(row) {
  return row.split(" ").map(Number);
}

function runProgram(input) {
  var inputSplit = input.split("\n");
  var arr1Rc = inputSplit[0].split(" ").map(Number);
  var r1 = arr1Rc[0];
  var arr1Lines = inputSplit.slice(1, r1 + 1);
  var data = arr1Lines.map(lines2Array);

  function nonPrimeCheck() {
    for (var i = 0; i < data.length; i++) {
      for (var j = 0; j < data[i].length; j++) {
        var number = data[i][j];
        //   console.log(number);
        var isPrime = true;
        for (k = 2; k <= number - 1; k++) {
          if (number % k == 0) {
            isPrime = false;
            break;
          }
        }
        if (number == 1) {
          console.log(number);
        } else if (isPrime == false) {
          console.log(number);
        }
      }
    }
  }

  //   console.log(nonPrimeCheck());
  nonPrimeCheck();
}

if (process.env.USER === "kishore") {
  runProgram(`3 3
1 2 3
4 5 6
7 8 9`);
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



const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below


function insertNodeAtTail(head, data) {
  
    let node = new LinkedListNode(data)
    if (head==null) {
        head = node; 
        //console.log("head:",head)
        return head;
    }
    let current  = head;
    while (current.next) {
        current = current.next;
    }
    current.next = node;
    //console.log("head2:",head)
    return head;
}