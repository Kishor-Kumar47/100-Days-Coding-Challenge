
// This function iterates through a string and logs each character until it finds a vowel
   //                                                       //  / KishorKumar//
function funVowel(str:string):void{
  const vowels = "aeiouAEIOU"
  for(const char of str){
    if(vowels.includes(char)){
      console.log(`First vowel found ${char}`);
      
      break;
    }



    console.log(char);
    
  }
}

funVowel("wsdtie");


// output
// w
// s
// d
// t
// First vowel found i