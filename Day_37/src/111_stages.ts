//..........................................Day 37, Q#111 ...............................//
//                                                 ///Kishor Kumar///
//......Life Stages.......//
function ageStages (stage : number){

    if (stage <13){
        console.log('Child');
        
    }else if(stage <=19 ){
        console.log('Teenager');
        
    }else{
        console.log('Adult');
        
    }
}


console.log(ageStages(27));
console.log(ageStages(20));
console.log(ageStages(16));
console.log(ageStages(6));

//OR
// const stage = 25;        //
// console.log(ageStages(stage));

