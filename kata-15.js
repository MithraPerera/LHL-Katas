// In this exercise, we will be given a list of instructors and we will create a single object to organize them based on their course.

const organizeInstructors = function (instructors) {
  // Put your solution here
  let organizedInstructors = {};
  for (const instructor of instructors) {
    organizedInstructors[(instructor.course).toString()] = [];
  }
  for (const instructor of instructors) {
    organizedInstructors[(instructor.course).toString()].push(instructor.name);
  }
  return organizedInstructors;
};

console.log(organizeInstructors([
  { name: "Samuel", course: "iOS" },
  { name: "Victoria", course: "Web" },
  { name: "Karim", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(organizeInstructors([
  { name: "Brendan", course: "Blockchain" },
  { name: "David", course: "Web" },
  { name: "Martha", course: "iOS" },
  { name: "Carlos", course: "Web" }
]));