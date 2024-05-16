"use strict";
///Day 24,Q#71//
//...........................,,Compare Let and Const,,.................................//
//
{
    let blockLet = "inside the block";
    const blockconst = "also inside the block";
    console.log(blockLet);
    console.log(blockconst);
}
try {
    console.log(blockLet);
}
catch (error) {
    console.log("'BlockLet' is not assignable to outside block. ");
}
try {
    console.log(blockconst);
}
catch (error) {
    console.log(" 'blockconst' is not assignable to outside block. ");
}
