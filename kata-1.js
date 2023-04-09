// In this exercise, we will be given an array of 2 or more numbers. We will then have to find the two largest numbers in that array, and sum them together.

const sumLargestNumbers = function (data) {
  // Put your solution here
  let num1 = 0;
  let num2 = 0;

  for (const numA of data) {
    if (numA > num1) {
      num1 = numA;
    }
    for (const numB of data) {
      if ((numB > num2) && (numB < num1)) {
        num2 = numB;
      }
    }
  }
  return num1 + num2;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));