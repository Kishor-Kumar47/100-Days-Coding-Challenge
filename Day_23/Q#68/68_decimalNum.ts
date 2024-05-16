
/// Day23,Q#68///
//                    ///KIshor Kumar///

//..................................Product(*) Decimal Numbers...............//

function decimalNum (Num1 : number , Num2 : number) :number{

    // Multiply the numbers and round the result to two decimal places//
    return Math.round ((Num1 * Num2)*100)/100
}


console.log(decimalNum(5.5 ,6.5));  // result is 35.75/