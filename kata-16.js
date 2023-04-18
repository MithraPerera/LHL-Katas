// In this exercise, we will be building an advanced case maker that can convert strings into all different kinds of case styles; like camel, pascal, snake, or even kebab.

const makeCase = function (input, caseChoice) {
  // Put your solution here
  const order = ['camel', 'pascal', 'snake', 'kebab', 'title', 'vowel', 'consonant', 'upper', 'lower'];
  let casesOrdered = [];
  let caseChoiceArr = [].concat(caseChoice);

  for (const c of caseChoiceArr) {
    casesOrdered.push(order.indexOf(c));
  }
  casesOrdered.sort();

  let sentence = input.split(" ");
  let newString = '';

  for (let cases of casesOrdered) {
    switch (cases) {
      // CAMEL
      case 0:
        newString = '';
        for (let i = 0; i < sentence.length; i++) {
          if (i === 0) {
            newString += sentence[i];
            continue;
          }
          newString += sentence[i].slice(0, 1).toUpperCase() + sentence[i].slice(1);
        }
        break;
      // PASCAL
      case 1:
        newString = '';
        for (let i = 0; i < sentence.length; i++) {
          newString += sentence[i].slice(0, 1).toUpperCase() + sentence[i].slice(1);
        }
        break;
      // SNAKE
      case 2:
        newString = '';
        for (let i = 0; i < sentence.length; i++) {
          if (i === sentence.length - 1) {
            newString += sentence[i];
            break;
          }
          newString += sentence[i] + '_';
        }
        break;
      // KEBAB
      case 3:
        newString = '';
        for (let i = 0; i < sentence.length; i++) {
          if (i === sentence.length - 1) {
            newString += sentence[i];
            break;
          }
          newString += sentence[i] + '-';
        }
        break;
      // TITLE
      case 4:
        newString = '';
        for (let i = 0; i < sentence.length; i++) {
          if (i === sentence.length - 1) {
            newString += sentence[i].slice(0, 1).toUpperCase() + sentence[i].slice(1);
            break;
          }
          newString += sentence[i].slice(0, 1).toUpperCase() + sentence[i].slice(1) + " ";
        }
        break;
      // VOWEL
      case 5:
        newString = '';
        for (let i = 0; i < sentence.length; i++) {
          for (let j = 0; j < sentence[i].length; j++) {
            if (sentence[i][j] === 'a' || sentence[i][j] === 'e' || sentence[i][j] === 'i' || sentence[i][j] === 'o' || sentence[i][j] === 'u') {
              newString += sentence[i][j].toUpperCase();
            } else {
              newString += sentence[i][j];
            }
          }
          newString += " ";
        }
        break;
      // CONSONANT
      case 6:
        newString = '';
        for (let i = 0; i < sentence.length; i++) {
          for (let j = 0; j < sentence[i].length; j++) {
            if (!(sentence[i][j] === 'a' || sentence[i][j] === 'e' || sentence[i][j] === 'i' || sentence[i][j] === 'o' || sentence[i][j] === 'u')) {
              newString += sentence[i][j].toUpperCase();
            } else {
              newString += sentence[i][j];
            }
          }
          newString += " ";
        }
        break;
      // UPPER
      case 7:
        newString = '';
        for (let i = 0; i < sentence.length; i++) {
          newString += sentence[i].toUpperCase();
        }
        break;
      // LOWER
      case 8:
        newString = '';
        for (let i = 0; i < sentence.length; i++) {
          newString += sentence[i].toLowerCase();
        }
        break;
      default:
        break;
    }
    sentence = newString;
  }
  return newString;
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));