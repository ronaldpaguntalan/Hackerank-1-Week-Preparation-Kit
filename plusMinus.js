function plusMinus(arr) {
    var fractionOfPositive = arr.filter(function (number) { return number > 0; }).length / arr.length;
    var fractionOfNegative = arr.filter(function (number) { return number < 0; }).length / arr.length;
    var fractionOfZero = arr.filter(function (number) { return number == 0; }).length / arr.length;
    return console.log(fractionOfPositive.toFixed(6) + "\n" + fractionOfNegative.toFixed(6) + "\n" + fractionOfZero.toFixed(6));
}
var result = plusMinus([-4, 3, -9, 0, 4, 1]);
console.log(result);
