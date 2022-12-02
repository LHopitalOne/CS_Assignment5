function matrixProduct(mat1, mat2) {
    let result = [];

    for (let i = 0; i < mat1.length; i++) {
        result[i] = [];
        for (let j = 0; j < mat2[0].length; j++) {
            result[i][j] = 0;
            for (let k = 0; k < mat1[0].length; k++) {
                result[i][j] += mat1[i][k] * mat2[k][j];
            }
        }
    }

    return result;
}

function sumOfMatrices(mat1, mat2) {
    let result = []

    for (let i = 0; i < mat1.length; i++) {
        result[i] = [];
        for (let j = 0; j < mat1[0].length; j++) {
            result[i][j] = mat1[i][j] + mat2[i][j];
        }
    }

    return result;
}

function _sumOfArray(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

function sumOfEachRow(mat) {
    let result = [];

    for (let i = 0; i < mat.length; i++) {
        result[i] = _sumOfArray(mat[i]);
    }

    return result;
}

function wordCount(str) {
    return str.split(" ").filter(el => el !== "").length;
}

function _trimLeft(str) {
	let index = 0; 
	
  while (str[index] === " ") {
  	index++; 
  }
  
	return str.slice(index); 
}

function _reverse(str) {
	return str.split("").reverse().join(""); 
}

function trim(str) {
    let fromLeft = _trimLeft(str);
    fromLeft = _reverse(fromLeft);
    fromLeft = _trimLeft(fromLeft);
    fromLeft = _reverse(fromLeft); 
  
	return fromLeft;
}

module.exports = {
    matrixProduct,
    sumOfEachRow,
    sumOfMatrices,
    wordCount,
    trim
};
