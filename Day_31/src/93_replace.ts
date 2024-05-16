//..........................,,,,,,,,,,,...............,,,Day 31, Q#93,,,....................,,,,,,,..............//
//                                                                      ///Kishor Kumar///
//........replace elemets Banana inti Mango
function replace (str : string[]): void{
const index = str.indexOf("Banana"); // finding index of Banana
if (index !== -1) str[index] = "Mango"; // replace Banana into Mengo

}

// replacing in array..
const fruit : string[] = ["Apple","Banana","Papaya"];
replace(fruit);

console.log(fruit); //answer is [ 'Apple', 'Mango', 'Papaya' ]


