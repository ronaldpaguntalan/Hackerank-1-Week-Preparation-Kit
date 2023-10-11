function miniMaxSum(arr: number[]): void {
    
    const maxVal : number = arr.sort((a, b) => b-a).slice(0,4).reduce((a,b) => a+b, 0)
    const minVal : number = arr.sort((a,b) => b-a).reverse().slice(0,4).reduce((a,b) => a+b, 0)

    return console.log(minVal+ " " + maxVal);
}

console.log(miniMaxSum([1,5,3,4,3]));
