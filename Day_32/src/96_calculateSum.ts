
///......................................,,,,,Day 32,Q#96,,,,,................................///
//                                                           ///Kishor Kumar///
//...........function of Calculate Sum.........//
function calculateSum (numb : number[]):number {
    return numb.reduce((accumulator, current) => accumulator + current, 0)
}

const numbers : number[] = [1,2,3,4,5,6,7,8,9];   //Array

console.log(calculateSum(numbers)); // output is: 45    ,    

//  because 1+2+3+4+5+6+7+8+9 = 45//


