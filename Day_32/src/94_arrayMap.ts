///......................................,,,,,Day 32,Q#94,,,,,................................///
//                                                           ///Kishor Kumar///
//Use the .map() method to create a new array that contains the length of each word from an array of words.

// Explain & TIP: The .map() method transforms each item in an array according to a specific function and returns a 
// new array with the transformed items.

const countries : string[]=["Pakistan","India","America","Japan"];

const world : number[] = countries.map (word => word.length);

console.log(world);

