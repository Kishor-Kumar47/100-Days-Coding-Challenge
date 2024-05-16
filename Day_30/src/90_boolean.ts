
//..........................,,,,,,,,,,,...............,,,Day 30, Q#90,,,....................,,,,,,,..............//
//                                                                      ///Kishor Kumar///

// ..........This function check if value is not number....//
function anyToBoolean (value : any):boolean{
    return isNaN(value);   // Checks and returns true if the value is NaN, false otherwise
}


console.log(anyToBoolean("Sir Daniyal Nagori")); // answer is  true, because "Sir Daniyal Nagori" isn't a number
console.log(anyToBoolean(786));                  //answer is false, because 786 is a number
// This way, we can guard against unexpected non-numeric values in our calculations or inputs.



