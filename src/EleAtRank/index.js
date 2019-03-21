/*
Returns the element at a particular
*/

const validate = require('../validation/positive-integer');

exports.EleAtRank = (arr, inp) => {
    if(!Array.isArray(arr)){
        return "Argument must be an array";
    }
    validate(inp, "EleAtRank");
    if(inp > arr.length){
        return -1;
    }

    let sorted = arr.slice().sort(function(a,b){return b-a});
    let rank = 1;

    for(let i = 0; i< arr.length; i++){
        if(rank === inp){
            return sorted[i];
        }
        else{
            rank++;
        }
    }
};