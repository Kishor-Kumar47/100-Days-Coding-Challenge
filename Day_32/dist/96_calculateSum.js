"use strict";
///......................................,,,,,Day 32,Q#96,,,,,................................///
//                                                           ///Kishor Kumar///
function calculateSum(numb) {
    return numb.reduce((accumulator, current) => accumulator + current, 0);
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(calculateSum(numbers));
