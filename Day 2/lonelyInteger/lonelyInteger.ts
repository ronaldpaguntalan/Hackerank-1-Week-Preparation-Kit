function lonelyInteger(a : number[]): number | undefined{

    return a.find(n => a.indexOf(n) === a.lastIndexOf(n));

    // for(let i = 0; i < a.length; i++){
    //     const currentNumber = a[i];
    //     const firstIndex = a.indexOf(currentNumber);
    //     const lastIndex = a.lastIndexOf(currentNumber);

    //     if(firstIndex === lastIndex){
    //         return currentNumber;
    //     }
    // }
    // return undefined;
}

console.log(lonelyInteger([1,1,2,2,3,3,4,5,5,6,6]))