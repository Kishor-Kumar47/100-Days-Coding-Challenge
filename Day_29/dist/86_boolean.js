"use strict";
//............,,,,,,,,,,,.................,,,Day 29, Q#86,,,.................,,,,,,,,,,,,,.....................//
//                                                                  ///Kishor Kumar///
// Create a function that checks if the word "JavaScript" is present in a given string. It should return true if found, 
// otherwise false.
// Explain & TIP: The .includes() method lets you check if a string contains a certain piece of text, returning a 
// boolean (true or false).
function check(str) {
    return str.includes("Javascript");
}
console.log(check("I like to code with javascript")); //  it shows  'false'
