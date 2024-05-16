
/// Day 21, Q#62///

// create blueprint by (interface) for info//            
interface students {
    Name: string,
    Age: number,
    courses:string[];
}

//                                     ///Kishor Kumar///
// Filling blueprint//
let student:students = {
    Name:'Kishor',
    Age:  19,
    courses: ['Meta verse','Web3.0','GenAI']
}

// show list of info//

console.log(student)