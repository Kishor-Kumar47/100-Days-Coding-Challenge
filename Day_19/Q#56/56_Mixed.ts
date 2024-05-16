

//Day19, Q#56//

//Mixed Array//                                   // Kishor Kumar //
let mixed = [3,"Mango",4,"Orange",true,"Apple"];

// Pick the words//
let string = mixed.filter(item => typeof item  === "string");

console.log(string);