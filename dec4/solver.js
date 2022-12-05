/**
 * adventofcode2022 solver
 *
 * Author: Kim Eirik Kvassheim
 * Website: github.com/kek91
 */

const fs = require('fs');


const data = fs.readFileSync('input.txt', 'utf8');
const dataLines = data.split('\n');


dataLines.forEach( (it) => {

    let elf1 = it.split(",")[0]; // 6-8
    let elf1Start = parseInt(elf1.split("-")[0]);
    let elf1End = parseInt(elf1.split("-")[1]);

    let elf2 = it.split(",")[1]; // 6-8
    let elf2Start = parseInt(elf2.split("-")[0]);
    let elf2End = parseInt(elf2.split("-")[1]);

    let elf1Array = [];
    let elf1ArrayFixed = [];


    for (let i = elf1Start; i < (elf1End+1); i++) {
        elf1Array.push( { id: i, contained: false } );
    }

    console.log("elf1Array: ", elf1Array);

    for (let n = elf2Start; n < (elf2End+1); n++) {
        console.log("Checking " + n + " in elf1Array..");

        elf1Array.forEach( (itm, index) => {
            console.log("itm " + itm.id + " === n " + n + " ???? " + (itm.id === n));
            elf1Array[index].contained = (itm.id === n);
        })

        // elf1Array.map( (itm) => {
        //     console.log("itm " + itm.id + " === n " + n + " ???? " + (itm.id === n));
        //     elf1Array[itm.id].contained = true;
        //
        // })

        // console.log("...-.-.-.-");
    }

    console.log(elf1Array);

    // console.log(elf1Array);

    // console.log(it + " - Is elf2 fully contained in elf1? " + elf2InElf1);

    // console.log("Elf 1 end: " + elf1End);
    //
    // console.log("-");



})
