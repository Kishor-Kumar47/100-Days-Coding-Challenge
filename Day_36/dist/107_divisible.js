"use strict";
function divisibleNum(num) {
    return (num % 2 === 0 && num % 3 === 0);
}
const num = 6;
if (divisibleNum(num)) {
    console.log(`${num} is divisible by both 2 and 3.`);
}
else {
    console.log(`${num} is not divisible by both 2 and 3.`);
}
