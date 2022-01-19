var data = {
    array1: [1, 2, 3, 4],
    array2: [2, 4, 6, 8],  
    
}

var result = "";

for (var i = 0; i < data.array1.length; i++) {
    for (var j = 0; j < data.array2.length; j++) {
        if (data.array1[i] == data.array2[j]) {
            result += data.array1[i] + " ";
        }
    }
}
console.log(result);

