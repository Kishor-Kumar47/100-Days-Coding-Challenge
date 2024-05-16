"use strict";
//         Q:48
let priceSet1 = [65000, 70000, 85000];
let priceSet2 = [100000, 120000, 250000];
let combinePrices = [...priceSet1, ...priceSet2].sort((a, b) => a - b);
console.log(combinePrices);
