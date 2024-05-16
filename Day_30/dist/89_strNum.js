"use strict";
//..........................,,,,,,,,,,,...............,,,Day 30, Q#89,,,....................,,,,,,,..............//
//                                                                      ///Kishor Kumar///
// Create a function that takes a string representing a number (like "123") and converts it into an actual number type.
// Explain & TIP: parseInt() for whole numbers or parseFloat() for decimals are handy for turning number-like strings 
// into real numbers, allowing you to perform mathematical operations on them.
// ........ Changing string into number .....//
function strNum(str) {
    return parseFloat(str); // parseFloat methode helps to convert string into number//
}
// I Console 3 numbers you can print unlimited numbers//
console.log(strNum("308.73")); // answer 308.73
console.log(strNum("804")); // answer 804       // favrite number of pakistani/
console.log(strNum("87.73")); // answer 87.73
