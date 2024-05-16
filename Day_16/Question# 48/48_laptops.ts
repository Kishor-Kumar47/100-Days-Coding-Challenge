

//            Question 48:

// Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. 
//Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.

// Explain & TIP: The spread operator can be used in conjunction with array methods like `sort()` to combine and 
//manipulate arrays efficiently.


let priceSet1 =[65000, 70000, 85000];                            // Kishor Kumar
let priceSet2 =[100000, 120000, 250000];
let combinePrices =[...priceSet1,...priceSet2].sort((a,b) =>a-b);

console.log(combinePrices)