const fs = require("fs");
const readline = require("readline");

const r = readline.createInterface({
    input: fs.createReadStream("input.txt")
});


const possible_results = {
    "A X": 3,
    "B X": 1,
    "C X": 2,
    "A Y": 4,
    "B Y": 5,
    "C Y": 6,
    "A Z": 8,
    "B Z": 9,
    "C Z": 7 
}

let total = 0;
r.on("line", (line) => {
    total += possible_results[line];
});

r.on("close", () => console.log(total));