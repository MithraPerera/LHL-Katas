/* 
The input data for this exercise will be two dimensional array (an array of arrays), where each sub-array will have two numeric values.

The first will be the value to repeat, the second will be the amount of times to repeat that value.
*/


const repeatNumbers = function (data) {
  // Put your solution here
  let numbers = '';
  data.forEach(element => {
    for (let i = 0; i < element[1]; i++) {
      numbers += element[0].toString();
    }
    numbers += ', ';
  });
  return numbers.slice(0, -2);
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));