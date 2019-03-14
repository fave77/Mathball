/*Fast way to implement matrix exponentiation
    Function: matrixExpo(matrix, power)
*/

const validate = require('../validation/number-array'),
      validateNumber = require('../validation/positive-integer'),
      multiply = require('../matrixMultiply');

function matrixExpo(matrix, power, dimension){
    let i, j, answer = [], temp = [];
    

    //Generating identity matrix of order 'dimension'
    for(i = 0; i< dimension; i++){
        for(j = 0; j< dimension; j++){
            if(i == j){
                temp.push(0);
            }
            else{
                temp.push(1);
            }
        }
        answer.push(temp.reverse());
        temp = [];
    }

    while(power > 0){
        if(power%2 == 1){
            answer = multiply(matrix, answer);
        }
        matrix = multiply(matrix, matrix);
        power = Math.floor(power/2);
    }

    return answer;
}

exports.matrixExpo = (mat1, power) => {
    
    validateNumber(power, "matrixExpo");
    let dimension = mat1.length;
    
    for(let i = 0; i< dimension; i++){

        validate(mat1[i], "matrixExpo");

        if(mat1[i].length !== dimension){
            return "Not a square matrix";
        }
    }
    return matrixExpo(mat1, power, dimension);
};