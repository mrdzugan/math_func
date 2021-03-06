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

// ========= WORK WITH Math.min, Math.max

// #8
function getMinMax() {
    return `Min: ${Math.min(4, -2, 5, 19, -130, 0, 10)}, Max: ${Math.max(4, -2, 5, 19, -130, 0, 10)}`;
}

// ========= WORK WITH Math.random

// #9
function getRandomFromArrange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// #10
function getRandomArray() {
    const arr = [];
    for (let i = 0; i < 10; i++) {
        arr[i] = getRandomFromArrange(1, 100);
    }
    return arr;
}

// ========= WORK WITH Math.abs

// #11
function getDifferenceModulus(a, b) {
    return Math.abs(a - b);
}

// #12
function getDifferenceModulusAdvanced(a, b) {
    const c = Math.abs(a - b);
    return c;
}

// ========= Additional tasks

// #13
const arr = [12, 15, 20, 25, 59, 79];
console.log(getAverage(arr));

function getAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

// #14
function getFactorial(n) {
    let fact = 1;
    for (let i = fact + 1; i <= n; i++) {
        fact *= i;
    }
    return `!${n} = ${fact}`;
}