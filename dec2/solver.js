/**
 * adventofcode2022 solver
 *
 * Author: Kim Eirik Kvassheim
 * Website: github.com/kek91
 */

const fs = require('fs');

const opponentMoves = {
    "a": "rock",
    "b": "paper",
    "c": "scissors"
};

const myMoves = {
    "x": "rock",
    "y": "paper",
    "z": "scissors",
};

let scoreTable = {
    "x": 1,
    "y": 2,
    "z": 3,
    "draw": 3,
    "win": 6
};

const data = fs.readFileSync('input.txt', 'utf8');
const dataLines = data.split('\n');

let totalScore = 0;

dataLines.forEach( (it) => {
    const moves = it.split(" ");
    const om = moves[0].toLowerCase();
    const mm = moves[1].toLowerCase();

    let score;

    score = scoreTable[mm];

    if (opponentMoves[om] == "rock") {
        if (myMoves[mm] == "rock") {
            score = score + scoreTable["draw"];
        }
        else if (myMoves[mm] == "paper") {
            score = score + scoreTable["win"];
        }
    }
    else if (opponentMoves[om] == "paper") {
        if (myMoves[mm] == "paper") {
            score = score + scoreTable["draw"];
        }
        else if (myMoves[mm] == "scissors") {
            score = score + scoreTable["win"];
        }
    }
    else if (opponentMoves[om] == "scissors") {
        if (myMoves[mm] == "scissors") {
            score = score + scoreTable["draw"];
        }
        else if (myMoves[mm] == "rock") {
            score = score + scoreTable["win"];
        }
    }

    console.log(om + " " + mm + " => " + score + " points");

    totalScore = totalScore+score;

})

console.log("Total score: " + totalScore);
