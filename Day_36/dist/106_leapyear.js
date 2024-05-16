"use strict";
function leapYearOf(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
const year = 2023;
if (leapYearOf(year)) {
    console.log(`${year} is a leap year.`);
}
else {
    console.log(`${year} is not leap year.`);
}
