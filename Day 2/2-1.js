const fs = require("fs");
const readline = require("readline");

const r = readline.createInterface({
    input: fs.createReadStream("input.txt")
});


const possible_results = {
    "A X": 4,
    "B X": 1,
    "C X": 7,
    "A Y": 8,
    "B Y": 5,
    "C Y": 2,
    "A Z": 3,
    "B Z": 9,
    "C Z": 6 
}

let total = 0;
r.on("line", (line) => {
    total += possible_results[line];
});

r.on("close", () => console.log(total));