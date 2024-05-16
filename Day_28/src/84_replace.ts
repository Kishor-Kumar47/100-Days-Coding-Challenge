
//............,,,,,,,,,,,.................,,,Day 28, Q#84,,,.................,,,,,,,,,,,,,.....................//
//                                                                  ///Kishor Kumar///


// Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" 
// with "TypeScript".

// Explain & TIP: The .replace() method can search for a specific text pattern in a string and replace it with something 
// else. By default, it only replaces the first occurrence, but you can use a global regex for multiple replacements.

function replace (sentance : string):string{

    return sentance.replace(/JavaScript/g, "Typescript");

}


console.log(replace("I love javascript and it is awesome!")); // it shows 'I love javascript and it is awesome!'


