"use strict";
//              Day 17 ,Q#49        //
function logHobbies(...hobbies) {
    hobbies.forEach(hobby => {
        console.log(`I enjoy ${hobby}.`);
    });
}
logHobbies("Codding", "Learning", "Photographing");
