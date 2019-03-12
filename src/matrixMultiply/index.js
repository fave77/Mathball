const validate = require('../validation/number-array');

function dimValidation(arr){
    const dimension = arr[0].length;
    for(let i = 1; i< arr.length; i++){
        try{
            validate(arr[i], 'dimValidation');
        }
        catch(error){
            return false;
        }

        if(arr[i].length !== dimension){
            return false;
        }

        else{
            continue;
        }
    }
    return true;
}

function multiply(arr1, arr2){

    const noOfRows = arr1.length, noOfCols = arr2[0].length;
    let temp = [], answer = [],sum = 0, i, j, k;

    for(i = 0; i< noOfRows ;i++){
        for(j = 0; j< noOfCols; j++){
            for(k = 0; k< arr2.length; k++){
                sum += arr1[i][k] * arr2[k][j];
            }
            temp.push(sum);
            sum = 0;
        }
        answer.push(temp);
        temp = [];
    }

    return answer;
}

module.exports = (arr1, arr2) => {

    if(typeof arr1 === "string" || typeof arr2 === "string"){
        return "Enter 2-D arrays of number type only";
    }
    
    if(!dimValidation(arr1) || !dimValidation(arr2) || (arr1[0].length !== arr2.length)){
        return "Matrices are not compatible for multiplication";
    }

    else{
        return multiply(arr1, arr2);
    }
};