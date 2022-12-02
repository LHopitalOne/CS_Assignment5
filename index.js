const readlineSync = require("readline-sync");
const utils = require("./utils");

let mat1 = [
    [1, 2],
    [3, 4]
];

console.log(utils.matrixProduct(mat1, mat1));
console.log(utils.sumOfEachRow(mat1));
console.log(utils.sumOfMatrices(mat1, mat1));

const str = readlineSync.prompt();

console.log(utils.wordCount(str));
console.log(utils.trim(str));
