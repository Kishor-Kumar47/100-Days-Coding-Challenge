///Day 24,Q#72//
//...........................,,Block Let and Const,,.................................//
//                                               ///Kishor Kumar///

{let blockLet = "inside the block";
const blockconst = "also inside the block";

console.log (blockLet); // 'show inside the block'//
console.log (blockconst); // 'also inside the block'//
}

try{
    console.log(blockLet);
} catch (error){
    console.log("'BlockLet' is not assignable to outside block. ") 
}                   // show error 
try{
    console.log(blockconst);
} catch (error){
    console.log(" 'blockconst' is not assignable to outside block. ")
}                  // show error