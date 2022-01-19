

function colorCode(x) {
    var res = "";
    for (var i = 0; i < x.length; i++) {
        var div = x[i] / 16;
        var a = Math.floor(div);
        var b = div - a;
        var c = b * 16;
        var d = Math.floor(c);
        res += a + "" + d;
    
    }
       console.log(res);
 
}
//colorCode([100, 121, 93])
colorCode([45, 0, 210])
colorCode([0, 255, 0])
colorCode([12, 24, 36])
