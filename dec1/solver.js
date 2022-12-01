/**
 * adventofcode2022 solver
 *
 * Author: Kim Eirik Kvassheim
 * Website: github.com/kek91
 */
console.info("Advent of Code 2022");
console.info("solver.js");
console.info("Written by Kim Eirik Kvassheim");

/*
Ref input.txt. Find the Elf carrying the most Calories. How many total Calories is that Elf carrying?
Each elf is separated by double line break...
*/

const fs = require('fs');

const data = fs.readFileSync('input.txt', 'utf8');
const dataLines = data.split('\n');

let elvesCalories = [];
let currentElfCalories = 0;
let elvesNumber = 1;
dataLines.forEach( (l) => {
    if(parseInt(l) > 0) {
        console.log('start');
        console.log(currentElfCalories);
        currentElfCalories = parseInt(parseInt(currentElfCalories) + parseInt(l));
        console.log(currentElfCalories);
        console.log('stop');
    }
    else {
        elvesCalories.push( { id: elvesNumber, calories: currentElfCalories } );
        currentElfCalories = 0;
        elvesNumber++;
    }

})

elvesCalories.sort( (a, b) => {
    if (a.calories > b.calories) return 1;
    if (a.calories < b.calories) return -1;
    return 0;
});

// console.log(elvesCalories);

elvesCalories.forEach( (it) => {
    console.log(it);
})

console.log("Finished parsing calory data for " + elvesNumber + " elves");

/*
top 3 elves:
{ id: 224, calories: 65433 }
{ id: 150, calories: 66474 }
{ id: 184, calories: 67450 }
65433 + 66474 + 67450 =
 */
console.log("Top 3 elves has " + parseInt(65433 + 66474 + 67450) + " calories in total");
