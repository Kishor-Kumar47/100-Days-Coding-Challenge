"use strict";
//..........................,,,,,,,,,,,...............,,,Day 31, Q#93,,,....................,,,,,,,..............//
//                                                                      ///Kishor Kumar///
function replace(str) {
    const index = str.indexOf("Banana"); // finding index of Banana
    if (index !== -1)
        str[index] = "Mango"; // replace Banana into Mengo
}
const fruit = ["Apple", "Banana", "Papaya"];
replace(fruit);
console.log(fruit);
