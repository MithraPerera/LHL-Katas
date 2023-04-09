// For this kata, we'll be adding only the numbers in the array which match the given condition.

const conditionalSum = function (values, condition) {
  let sum = 0;
  // Your code here
  switch (condition) {
    case "even":
      values.forEach(function (value) {
        if (value % 2 === 0) {
          sum += value;
        }
      });
      break;

    case "odd":
      values.forEach(function (value) {
        if (value % 2 !== 0) {
          sum += value;
        }
      });
      break;

    default:
      break;
  }
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));