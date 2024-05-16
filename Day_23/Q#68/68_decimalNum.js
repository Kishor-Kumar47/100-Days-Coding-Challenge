"use strict";
function decimalNum(Num1, Num2) {
    return Math.round((Num1 * Num2) * 100) / 100;
}
console.log(decimalNum(5.5, 6.5));
