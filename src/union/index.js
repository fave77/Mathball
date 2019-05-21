const validate = require('../validation/number-array');

let union = (arr1, arr2) => {

    validate(arr1, 'union');
    validate(arr2, 'union');

    arr1.sort();
    arr2.sort();

    let result = [], len = arr1.length + arr2.length, i = 0, j = 0;

    while((i+j) < len){
        if((i < arr1.length && j < arr2.length)){
            if(arr1[i] < arr2[j]){
                result.push(arr1[i]);
                i++;
            }
            else if(arr1[i] > arr2[j]){
                result.push(arr2[j]);
                j++;
            }
            else{
                result.push(arr1[i]);
                i++;
                j++;
            }
        }
        else if(i == arr1.length){
            result.push(arr2[j]);
                j++;
        }
        else{
            result.push(arr1[i]);
            i++;
        }
    }
    return result;
};

module.exports = union;