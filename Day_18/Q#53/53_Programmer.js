"use strict";
//    Day 18 , Q# 53
// A list showing a programmer's skills in detail
let computerProgrammer = {
    languages: ["JavaScript", "TypeScript", "Python"],
    frameworks: ["React", "Angular", "Vue"],
    tools: ["Git", "Webpack", "Docker",]
};
// Getting specific skills from the list
let { languages, frameworks, tools } = computerProgrammer;
// Showing a skill from each category
console.log(`Language: ${languages[0]}, Framework: ${frameworks[0]}, Tool: ${tools[0]}`);
