// In this exercise, we will be counting the number of vowels that appear in a given string. For this exercise, consider the following to be vowels: a, e, i, o, and u.
const vowels = ['a', 'e', 'i', 'o', 'u'];

const numberOfVowels = function (data) {
  let count = 0;
  // Put your solution here
  for (const letter of data) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));