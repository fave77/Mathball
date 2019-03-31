//Include your validation cases here
const validateNumber = require("../validation/number"),
    validateNonNegative = require("../validation/non-negative-integer");

/*
*  Perform the necessary validation within the function and not in the exports block.
*/

//Function to round-off the variable, with fixed length after the decimal
let round = (value, length) => {

    validateNonNegative(length, "convert");
    if(length >= 1){
        let temp = Number.parseFloat(value).toFixed(length);
        return Number.parseFloat(temp);
    }
    else{
        return value;
    }
};

//Convert degrees to radians
let toRadians = num => {
    validateNumber(num, 'convert');

    return num*Math.PI/180;
};

//Convert radians to degrees
let toDegrees = num => {
    validateNumber(num, 'convert');

    return num*180/Math.PI;
};

exports.convert = (num, object, trim = 0) => {         

    //Verification if the object variable is of type 'object'
    if(typeof object !== 'object'){
        throw new TypeError(`Invalid argument received: ${JSON.stringify(object)} in convert() must be an object!\n`);
    }

    //Check if the object variable has the required fields
    if(typeof object === 'object' && (!(object.hasOwnProperty('from')) || !(object.hasOwnProperty('to')))){
		throw new ReferenceError(`Invalid argument received: ${JSON.stringify(object)} in convert() must contain to and from fields!\n`);
    }

    //Check if the value of trim is valid or not
    validateNonNegative(trim, "convert");

    //Store the output of your function here
    let value;

    //Handle your to and from cases here
    if(object.from === 'radian' && object.to === 'degree'){
        value = round(toDegrees(num), trim);
    }
    else if(object.from === 'degree' && object.to === 'radian'){
        value = round(toRadians(num), trim);
    }

    //default error message
    else{
        value = "Your to/from parameter was not found!";
    }
    
    //Returning the answer
    return value; 
};