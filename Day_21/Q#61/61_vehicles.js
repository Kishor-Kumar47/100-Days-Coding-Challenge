"use strict";
///Day 21, Q#61///
var vehicles;
(function (vehicles) {
    vehicles[vehicles["car"] = 0] = "car";
    vehicles[vehicles["Motorbike"] = 1] = "Motorbike";
    vehicles[vehicles["truck"] = 2] = "truck";
})(vehicles || (vehicles = {}));
// print one type of vehicle from list/
console.log(vehicles.car); //   it shows 0 because we just check its category/
