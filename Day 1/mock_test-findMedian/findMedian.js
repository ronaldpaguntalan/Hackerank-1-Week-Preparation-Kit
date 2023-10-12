var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function findMedian(arr) {
    var mid = Math.floor(arr.length / 2);
    var arrSorted = __spreadArray([], arr, true).sort(function (a, b) { return a - b; });
    if (mid % 2 === 0) {
        return (arrSorted[mid - 1] + arrSorted[mid]) / 2;
    }
    else {
        return arrSorted[mid];
    }
}
console.log(findMedian([1, 2, 3, 4, 5, 6, 7, 8]));
