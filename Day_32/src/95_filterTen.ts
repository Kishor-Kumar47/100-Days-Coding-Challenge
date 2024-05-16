///......................................,,,,,Day 32,Q#95,,,,,................................///
//                                                           ///Kishor Kumar///


// Write a function that uses the .filter() method to return an array of numbers greater than 10.

// Explain & TIP: The .filter() method creates a new array with all elements that pass the test implemented by 
// the provided function.
//...........function of GreaterThan 10 ...............//
function greaterThan (numbers : number[]): number[]{             

    return numbers.filter (Number => Number > 10); //return the value > 10

}


const numArr : number[] = [7,10,14,25,2,]; // array 
console.log(greaterThan(numArr));    // output is: [ 14, 25 ], because 14 and 25 is greater than 10/ 





