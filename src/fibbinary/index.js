const validate = require('../validation/positive-integer');

function isFibbinary(num){
    if ((num & (num >> 1)) === 0) {
        return true;
    }

    else{
        return false;
    }
}

exports.check = num => {
    validate(num, 'fibbinary');
    return isFibbinary(num);
};