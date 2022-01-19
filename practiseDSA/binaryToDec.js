

function binaryToDecimal(a) {
    var res = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] == 1) {
            res += 2 ** i;
        }
    }
    console.log(res);
}

binaryToDecimal("10001")
binaryToDecimal("10101")
binaryToDecimal("1001001")