function countingSort(arr: number[]): number[] {
  // const max : number = 100; //the challenge will only accept 100 frequency
  // let counterArray : number[] = new Array(max).fill(0); //you can add max + 1 if in the future you have different frequency and still the zero is present
  const max: number = Math.max(...arr);
  let counterArray: number[] = new Array(max + 1).fill(0);

  for (let i = 0; i < arr.length; i++) {
    counterArray[arr[i]]++;
  }

  return counterArray;
}

console.log(countingSort([0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 5]));
