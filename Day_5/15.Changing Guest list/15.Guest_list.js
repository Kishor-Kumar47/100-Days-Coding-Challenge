"use strict";
let Guest_list = ['Kishor Kumar', 'Gotam Dass', 'Dolat Ram', 'Bhagchand'];
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleaser to invite you in our party . \n\n Thank you! ');
}
let absent_Guest = 'Kishor Kumar';
let new_Guest = 'Shellu Bhai';
Guest_list[0] = new_Guest;
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleaser to invite you in our party . \n\n Thank you! ');
}
console.log(`Mr. ${absent_Guest} is not coming to the party.`);