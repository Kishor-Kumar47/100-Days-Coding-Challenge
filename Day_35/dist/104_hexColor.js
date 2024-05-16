"use strict";
// ///.............................................Day 35, Q#104................./..................////
// //......Hex color..../
/// boefor useing this padStart methode set ES 2017 in configjson file//
function hexColor() {
    const color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
    return color;
}
console.log(hexColor()); //output is random: like , #1cea6e or #896826 ...
