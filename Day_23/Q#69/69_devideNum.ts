
//.....................Devides two numbers and show quotient and remainder.........................//
//                                                                    ///Kishor Kumar//
function devideNum (devident:number , devisor:number): {quotient : number , remainder : number }{
             // calculate the quotient and remainder//
        let quotient = Math.floor(devident / devisor);
        let remainder = (devident % devisor);
        // return both an object//
        return {quotient , remainder};

    }


console.log(devideNum(10,3));  //  result is { quotient: 3, remainder: 1 }//