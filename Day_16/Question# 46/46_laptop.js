"use strict";
//                            Day16, Q:46
// Enhanced Laptop Object: Construct an object for a laptop including
// properties `make`, `model`, `year`, and a method `describe()` that logs a sentence about the laptop.
//Explain & TIP:** Objects can also contain functions (methods) that can perform actions using the object's properties. 
//This introduces method definition within objects.
//                                                             ///Kishor Kumar///
let laptop = {
    make: "Lenovo",
    model: "i5 GEN 7",
    year: "2022",
    describe: function () {
        console.log(`This is a ${this.year} ${this.make} ${this.model} . `);
    }
};
laptop.describe();
