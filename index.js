// ========= WORK WITH %

// #1
function remainderOfDivision(a, b) {
    return a % b;
}

// #2
function remainderOfDivisionAdvanced(a, b) {
    return a % b === 0 ? 'Делится' : `Делится с остатком ${a % b}`;
}

// ========= WORK WITH Math.pow(), Math.sqrt()

// #3
const st = Math.pow(2, 10);

// #4
function sqrt245() {
    return Math.sqrt(245);
}

// #5
function sqrtFromArray() {
    const arr = [4, 2, 5, 19, 13, 0, 10];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Math.pow(arr[i], 3);
    }
    return Math.sqrt(sum);
}

// ========= WORK WITH Math.round, Math.ceil, Math.floor, toFixed, toPrecision

// #6
function getRounded() {
    const num = Math.sqrt(379);
    for (let i = 0; i <= 2; i++) {
        console.log(`toFixed: ${num.toFixed(i)}`);
    }
}

// #7
function getRoundedObj() {
    const obj = {};
    const num = Math.sqrt(587);
    obj.floor = Math.floor(num);
    obj.ceil = Math.ceil(num);
    return obj;
}
