// In this exercise, we will be given a list of instructors and have to determine which instructor has the longest name.

const instructorWithLongestName = function (instructors) {
  // Put your solution here
  let nameLength = 0;
  let longestName;
  for (const instructor of instructors) {
    if (instructor.name.length > nameLength) {
      nameLength = instructor.name.length;
      longestName = instructor;
    }
  }
  return longestName;
};

console.log(instructorWithLongestName([
  { name: "Samuel", course: "iOS" },
  { name: "Jeremiah", course: "Web" },
  { name: "Ophilia", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(instructorWithLongestName([
  { name: "Matthew", course: "Web" },
  { name: "David", course: "iOS" },
  { name: "Domascus", course: "Web" }
]));