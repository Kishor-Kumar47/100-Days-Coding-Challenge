// Day 19, Q#57//

// Grade list //
let grades = [90,98,99,68,70,79];

// Calculate Average Grade//

let averageGrade = grades.reduce ((total,grade) => total + grade,0) / grades.length;

console.log(averageGrade);
