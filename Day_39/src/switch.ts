

// This function logs the day of the week based on a number (1-7)
(function logDays (DayNum:number):void{
    switch(DayNum){
        case 1:
            console.log('Sunday');
            break;
        case 2:
            console.log('Monday');
            break;
        case 3:
            console.log('Tuesday');
            break;
        case 4:
            console.log('Wednesday');
            break;
        case 5:
            console.log('Thusday');
            break;
        case 6:
            console.log('Friday');
            break;
        case 7:
            console.log('saturday');
            break;
        default:
            console.log('incorrect day number');
            break;
            


        
    }
})(6) //output Friday // Tihs is iife role to call function//
  
//call to function 1st way
//   logDays(6); // Outputs: frisday  // Uses a switch statement to select the appropriate day based on the provided number.

