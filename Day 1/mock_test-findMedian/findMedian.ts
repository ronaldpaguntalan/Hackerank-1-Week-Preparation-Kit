function findMedian(arr : number[]): number{
    const mid : number = Math.floor(arr.length / 2); //to get the middle number
    const arrSorted : number[] = [...arr].sort((a,b) => a - b); //to sorted in ascending order

    if(mid % 2 === 0){
        return (arrSorted[mid - 1] + arrSorted[mid])/2
    }
    else{
        return arrSorted[mid];
    }
}

console.log(findMedian([1,2,3,4,5,6,7,8]));