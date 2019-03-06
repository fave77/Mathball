
const validate = require('../validation/number');


function pow(a, b, c = Number.MAX_SAFE_INTEGER)
{
    if(b == 0)
    {
        return 1;
    }
    
    let y;
    if(b%2 == 0){
        y = pow(a, b/2, c);
        y = (y*y)%c;
    }
    else{
        y = a%c;
        y = (y* pow(a, b-1, c)%c)%c;
    }
    return Math.trunc((y+c)%c);
}

module.exports = (a, b, c) => {
    validate(a, 'pow');
    validate(b, 'pow');
    
    if( c != undefined)
    {
        return pow(a, b, c);
    }
    else
    {
        return pow(a, b);
    }
}