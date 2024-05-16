
//                             **Question 47:** 
//Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties `make`, `model`, and `year`, use array destructuring to assign the first and second laptops to variables. Then, log these variables.

// **Explain & TIP:** Destructuring can also be used to quickly extract elements from arrays of objects, simplifying access to complex data structures.


let laptops=[
    {make:"Lenovo",model:"i5 GEN 7",year:2022},                         // Kishor Kumar
    {make:"Dell",model:"i5 GEN 6",year:2021},
    {make:"hp",model:"i5 GEN 5",year:2020},
    {make:"Samsung",model:"i5 GEN 4",year:2019}
]

let [laptop1,laptop2,laptop3,laptop4]=laptops;

console.log(laptop1);
console.log(laptop2);
console.log(laptop3);
console.log(laptop4);
