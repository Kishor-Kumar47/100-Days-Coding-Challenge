"use strict";
// This function iterates through a string and logs each character until it finds a vowel
function funVowel(str) {
    const vowels = "aeiouAEIOU";
    for (const char of str) {
        if (vowels.includes(char)) {
            console.log(`First vowel found ${char}`);
            break;
        }
        console.log(char);
    }
}
funVowel("wsdtie");
// // This function iterates through a string and logs each character until it finds a vowel
// function logUntilVowel(str: string): void {
//   const vowels = "aeiouAEIOU";
//   for (const char of str) {
//     if (vowels.includes(char)) {
//       console.log(`First vowel found: ${char}`);
//       break; // Stops the loop at the first vowel found
//     }
//     console.log(char); // Logs each character until a vowel is encountered
//   }
// }
// logUntilVowel("syzygy"); 
