//Day 20, Q#58//

// This program calculates the average of all scores given      // Kishor Kumar //

function averageScore(...scores: number[]): number {
    // Adds all scores together and divides by the number of scores
    let total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}

// Example: finding the average of four scores
console.log(averageScore(85, 70, 90, 100)); // Shows the average score
// We add up all the scores, then divide by how many there are.