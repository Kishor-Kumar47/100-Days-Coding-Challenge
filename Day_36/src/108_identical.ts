

function identicalCase (str1 :string, str2 :string):boolean{

    return (str1.toLowerCase() === str2.toLowerCase());
}


const str1 = "kishor";
const str2 = "ali";

if (identicalCase(str1 , str2)){
    console.log("The strings are identical, ignoring case.");
    
}else{
    console.log("The strings are not identical.");
}

