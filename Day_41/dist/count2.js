"use strict";
//............................ count number 1 to 10 without 5 ........//
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}
// output is
// 1
// 2
// 3
// 4
// 6
// 7
// 8
// 9
// 10
