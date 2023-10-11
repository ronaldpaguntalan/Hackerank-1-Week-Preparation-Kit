function miniMaxSum(arr) {
    var maxVal = arr.sort(function (a, b) { return b - a; }).slice(0, 4).reduce(function (a, b) { return a + b; }, 0);
    var minVal = arr.sort(function (a, b) { return b - a; }).reverse().slice(0, 4).reduce(function (a, b) { return a + b; }, 0);
    return console.log(minVal + " " + maxVal);
}
console.log(miniMaxSum([1, 5, 3, 4, 3]));
