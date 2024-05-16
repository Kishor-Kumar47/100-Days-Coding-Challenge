// (
function Grades (myGrade:String):void{
    switch(myGrade){
        case "A1":
            console.log('Excellent');
            break;
        case "A":
            console.log('Very Good');
            break;
        case "B":
            console.log('Good');
            break;
        case "C":
            console.log('Fair');
            break;
        case "D":
            console.log('Poor');
            break;
        case "F":
            console.log('Fail');
            break;

        default:
            console.log('incorrect Grade');
            break;
            

    }
}//)("A1") //output Excellent // Tihs is iife role to call function//
  
//call to function 1st way
Grades("A1")//output Excellent
