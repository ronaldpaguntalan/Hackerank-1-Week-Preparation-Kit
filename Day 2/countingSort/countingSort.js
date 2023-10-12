function countingSort(arr) {
    var max = Math.max.apply(Math, arr);
    var counterArray = new Array(max + 1).fill(0);
    for (var i = 0; i < arr.length; i++) {
        counterArray[arr[i]]++;
    }
    return counterArray;
}
console.log(countingSort([0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 5]));
