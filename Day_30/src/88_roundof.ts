
//..........................,,,,,,,,,,,...............,,,Day 30, Q#88,,,....................,,,,,,,..............//
//                                                                      ///Kishor Kumar///
//        Write a function that takes a decimal number as input and returns the number rounded to the nearest integer.
// Explain & TIP: The Math.round() function is perfect for rounding decimals to the closest whole number. 
// It looks at the decimal part and decides whether to round up or down.  
                                                               
//      In this function we round of number 
function roundToNum (num : number ):number{

    return Math.round(num); //
}

console.log(roundToNum(8.6)); // answer  '9'
console.log(roundToNum(9.8)); // answer  '10'

















