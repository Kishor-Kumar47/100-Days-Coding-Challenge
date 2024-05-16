"use strict";
//..........................,,,,,,,,,,,...............,,,Day 31, Q#92,,,....................,,,,,,,..............//
//                                                                      ///Kishor Kumar///
//.........Function to remove Element from Array.........//
function removeElement(Arr) {
    return Arr.pop(); /// pop method helps remove an element from array/
}
//........Array.......//
const remArr = ["Mango", "Graps", "Papaya"];
console.log(removeElement(remArr));
console.log(remArr); // answer is: [ 'Mango', 'Graps' ] , Here Papaya is removed because is was last element.//
