// In this activity, we will be converting date strings like "2017/12/02", into more English friendly date strings like December 2nd, 2017.

const talkingCalendar = function (date) {
  // Your code here
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let dateSeperated = date.split('/');
  let month = months[dateSeperated[1] - 1];
  let day = '';
  //1st 2nd 3rd 21st 22nd 23rd 31st
  // + at the beginning turns string into an int and removes the starting 0 if there is one
  if (dateSeperated[2] == 11 || dateSeperated[2] == 12 || dateSeperated[2] == 13) {
    day = dateSeperated[2].toString() + 'th,'
  } else if (dateSeperated[2][1] == 1) {
    day = +dateSeperated[2].toString() + 'st,'
  } else if (dateSeperated[2][1] == 2) {
    day = +dateSeperated[2].toString() + 'nd,'
  } else if (dateSeperated[2][1] == 3) {
    day = +dateSeperated[2].toString() + 'rd,'
  } else {
    day = +dateSeperated[2].toString() + 'th,'
  }
  return `${month} ${day} ${dateSeperated[0]}`
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));