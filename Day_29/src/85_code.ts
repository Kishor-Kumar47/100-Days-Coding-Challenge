//............,,,,,,,,,,,.................,,,Day 29, Q#85,,,.................,,,,,,,,,,,,,.....................//
//                                                                  ///Kishor Kumar///

// Finding the Position of a Substring: Write a function that locates the first occurrence of the word "code" within any 
// given string and returns its position.

// Explain & TIP: Use .indexOf() to find where a certain piece of text starts within a larger string. If the text isn't 
// found, this method returns -1.

function codePosition (str:string):number{

    return str.indexOf("code");
}

console.log(codePosition("Learn to code with javascript!")); // it shows 9
// It tells us the position number where "code" starts.