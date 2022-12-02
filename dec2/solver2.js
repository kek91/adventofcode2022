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
    "x": "lose",
    "y": "draw",
    "z": "win",
};

let scoreTable = {
    "x": 0,
    "y": 3,
    "z": 6,
    "rock": 1,
    "paper": 2,
    "scissors": 3,
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
        if (myMoves[mm] == "lose") {
            score = score + scoreTable["scissors"];
        }
        else if (myMoves[mm] == "draw") {
            score = score + scoreTable["rock"];
        }
        else if (myMoves[mm] == "win") {
            score = score + scoreTable["paper"];
        }
    }
    else if (opponentMoves[om] == "paper") {
        if (myMoves[mm] == "lose") {
            score = score + scoreTable["rock"];
        }
        else if (myMoves[mm] == "draw") {
            score = score + scoreTable["paper"];
        }
        else if (myMoves[mm] == "win") {
            score = score + scoreTable["scissors"];
        }
    }
    else if (opponentMoves[om] == "scissors") {
        if (myMoves[mm] == "lose") {
            score = score + scoreTable["paper"];
        }
        else if (myMoves[mm] == "draw") {
            score = score + scoreTable["scissors"];
        }
        else if (myMoves[mm] == "win") {
            score = score + scoreTable["rock"];
        }
    }

    console.log(om + " " + mm + " => " + score + " points");

    totalScore = totalScore+score;

})

console.log("Total score: " + totalScore);
