// We will be given a number as our input data. This number is the highest value of our multiplication table. Our job is to generate a multiplication table for the values from 1 to the provided number.

const multiplicationTable = function (maxValue) {
  // Your code here
  let line = [];
  for (let i = 1; i <= maxValue; i++) {
    for (let j = 1; j <= maxValue; j++) {
      line.push(i * j);
    }
    console.log(...line);
    line = [];
  }
  return "";
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));