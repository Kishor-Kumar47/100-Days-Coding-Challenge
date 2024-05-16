//..........................,,,,,,,,,,,...............,,,Day 31, Q#92,,,....................,,,,,,,..............//
//                                                                      ///Kishor Kumar///
//.........Function to remove Element from Array.........//
function removeElement <T> (Arr : T[]):T | undefined {

    return Arr.pop();  /// pop method helps remove an element from array/
}

//........Array.......//
const remArr : string[] = ["Mango", "Graps", "Papaya"];
console.log(removeElement(remArr));
console.log(remArr); // answer is: [ 'Mango', 'Graps' ] , Here Papaya is removed because is was last element.//