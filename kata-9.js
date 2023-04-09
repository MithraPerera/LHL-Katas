// We will receive a normal string of words separated with spaces as the input. Our job is to convert these strings into camel cased strings.

const camelCase = function (input) {
  // Your code here
  let sentence = input.split(" ");
  console.log(sentence);
  let newString = '';
  for (let i = 0; i < sentence.length; i++) {
    if (i === 0) {
      newString += sentence[i];
      continue;
    }
    newString += sentence[i].slice(0, 1).toUpperCase() + sentence[i].slice(1);
  }
  return newString;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));