// In this activity, we are going to create a function that can calculate which coins we should use when we need to give change.

const calculateChange = function (total, cash) {
  // Your code here
  let difference = cash - total;
  let denominations = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];
  let denominationsWord = ['twentyDollar', 'tenDollar', 'fiveDollar', 'twoDollar', 'oneDollar', 'quarter', 'dime', 'nickel', 'penny'];
  let change = {};
  for (let i = 0; i < denominations.length; i++) {
    if (Math.trunc(difference / denominations[i]) > 0) {
      change[denominationsWord[i]] = Math.trunc(difference / denominations[i]);
      difference -= Math.trunc(difference / denominations[i]) * denominations[i];
    }
  }
  return change;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));