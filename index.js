// ========= WORK WITH %

console.log(remainderOfDivision(32, 6));

function remainderOfDivision(a, b) {
    return a % b;
}

function remainderOfDivisionAdvanced(a, b) {
    return a % b === 0 ? 'Делится' : `Делится с остатком ${a % b}`;
}