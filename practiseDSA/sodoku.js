var data = [
    [3, 9, 4],
    [1, 5, 7],
    [2, 8, 6]
];



var num = [1,2,3,4,5,6,7,8,9];
//var arr = [];
var count = 0;

for (var i = 0; i < data.length; i++) {
    for (var j = i; j < data.length; j++) {
        for (var k = 0; k < num.length; k++) {
            if (data[i][j] == num[k]) {
                count++;
              num.splice(k);
            }
            
            
        }
    }
}
if (count == 9) {
    console.log("True");
}
else {
    console.log("False");
}
//console.log(arr);
console.log(count);