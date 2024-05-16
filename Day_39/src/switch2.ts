
// This function logs the day of the week based on a number (1-7)
(function logDays (DayNum:number):void{
    switch(DayNum){
        case 12:
        case 1:
        case 2:
            console.log('Winter');
            break;
        case 3:
        case 4:
        case 5:
            console.log('spring');
            break;
        case 6:
        case 7:
        case 8:
            console.log('sumer');
            break;
        case 9:
        case 10:
        case 11:
            console.log('Fall');
            break;
        
        default:
            console.log('incorrect month number');
            break;
            

    }
})(10) //output Fall // Tihs is iife role to call function//
  
//call to function 1st way
//   logDays(10); // Outputs: Fall // Uses a switch statement to select the appropriate day based on the provided number.
