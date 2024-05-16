"use strict";
// Creates a Map to store student IDs (keys) and names (values)
const student = new Map();
student.set(1, "Kishor");
student.set(2, "Dolat");
student.set(3, "Gotam");
// Iterates over the Map and logs each student ID and name
student.forEach((name, id) => {
    console.log(`Student ID: ${id}, Name: ${name}`);
});
// This loop goes through each student and logs their ID and name.
