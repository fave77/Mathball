
const validate = require('../validation/number-array');


function modularExponentiation(a, b, c = Number.MAX_SAFE_INTEGER)
{
    if(b == 0)
        return 1;
    
    var y;
    if(b%2 == 0){
        y = modularExponentiation(a, b/2, c);
        y = (y*y)%c;
    }
    else{
        y = a%c;
        y = (y* modularExponentiation(a, b-1, c)%c)%c;
    }
    return Math.trunc((y+c)%c);
}

module.exports = arr => {
    validate(arr, 'modularExponentiation');
    if( arr[2] != undefined)
        return modularExponentiation(arr[0], arr[1], arr[2]);
    else
        return modularExponentiation(arr[0], arr[1]);
}