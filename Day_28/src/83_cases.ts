
//............,,,,,,,,,,,.................,,,Day 28, Q#83,,,.................,,,,,,,,,,,,,.....................//
//                                                                  ///Kishor Kumar///


// Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, 
// and logs both.

// Explain & TIP: The .toUpperCase() and .toLowerCase() methods allow you to change the case of all letters in a string, 
// useful for formatting or comparing strings.

function caseConvert (cas:string){

let ucase = cas.toUpperCase();
let lcase = cas.toLowerCase();

console.log("Uppercase",ucase,"Lowercase",lcase)

}

caseConvert("Kishor Kumar"); // it shows 'lowercase kishor kumar upppercase KISHOR KUMAR'