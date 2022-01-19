var data = "thisracecarisgood";
var n = data.length;
var maxLength = 0;

for (var i = 0; i < n; i++) {
    var str = "";
    for (var j = i; j < n; j++) {
        str += data[j];
        //console.log(str);
        if (palindrome(str) == "True") {
            if (str.length > maxLength) {
                maxLength = str.length;
               // console.log(maxLength);

            }
        }
    }
}
console.log(maxLength);

function palindrome(str) {
    for (var k = 0; k < str.length; k++) {
        if (str[k] != str[str.length - 1 - k]) {
            return "False"
        }
    }
            return "True"
}
//console.log(palindrome("1291"));