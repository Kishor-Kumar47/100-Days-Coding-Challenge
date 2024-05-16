"use strict";
function devideNum(devident, devisor) {
    let quotient = Math.floor(devident / devisor);
    let remainder = (devident % devisor);
    return { quotient, remainder };
}
console.log(devideNum(10, 3));
