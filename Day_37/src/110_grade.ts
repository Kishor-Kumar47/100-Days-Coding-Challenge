
function assignGrade (score:number){
    if(score >= 80){
        return 'A';
    }else if(score >= 70){
        return 'B';
    }else if(score >= 60){
        return 'C';
    }else{
        return 'F';
    }
}

const score = 69;

const grade = (assignGrade(score));
console.log(`Your score is  ${score} and Grade is ${grade}.`);

