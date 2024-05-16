
///Day 24,Q#71//
//...........................,,Compare Let and Const,,.................................//
//

let Name = "Kishor";
Name = "Dolat"; // let allows Reassignmet
console.log(Name);

// Trying to reassign a `const`-declared variable
const friendName = "Awais";
try {
    friendName = "Bhagchand"; // This line will cause an error
} catch (error) {
    console.log("Error: Can't reassign a `const`-declared variable."); // This message is shown
}
// This example illustrates that `const` prevents changing the variable once it's set







