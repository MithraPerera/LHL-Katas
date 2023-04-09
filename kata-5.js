// In this exercise, we will be given a normal string of words and turn it into a percent-encoded string by replacing all whitespace with %20.

const urlEncode = function (text) {
  // Put your solution here
  let textFixed = text.trim();
  let newString = '';
  for (const letter of textFixed) {
    if (letter === ' ') {
      newString += '%20';
    } else {
      newString += letter;
    }
  }
  return newString;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));