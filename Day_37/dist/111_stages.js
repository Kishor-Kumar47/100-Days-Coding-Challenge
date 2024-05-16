"use strict";
//................................................Life Stages..............................//
//                                                 ///Kishor Kumar///
function ageStages(stage) {
    if (stage < 13) {
        console.log('Child');
    }
    else if (stage <= 19) {
        console.log('Teenager');
    }
    else {
        console.log('Adult');
    }
}
console.log(ageStages(27));
console.log(ageStages(20));
console.log(ageStages(16));
console.log(ageStages(6));
// const stage = 25;        //
// console.log(ageStages(stage));
