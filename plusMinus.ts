function plusMinus(arr : number[]): void{
    let fractionOfPositive = arr.filter(number => number > 0).length / arr.length;
    let fractionOfNegative = arr.filter(number => number < 0).length / arr.length;
    let fractionOfZero = arr.filter(number => number == 0).length / arr.length;

    return console.log(fractionOfPositive.toFixed(6) + "\n" + fractionOfNegative.toFixed(6) + "\n" + fractionOfZero.toFixed(6));
}

const result = plusMinus([-4, 3, -9, 0, 4, 1]);
console.log(result);