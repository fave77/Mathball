/*
    Function: pow(base,exp,modulo)
*/

const validate = require("../validation/non-negative-integer");

function pow(base, exp, modulo = Number.MAX_SAFE_INTEGER){
    
    let result = 1;      
  
    base = base % modulo; 
  
    while (exp > 0) 
    { 
        if (exp%2 == 1) 
        {
            result = (result*base) % modulo; 
        }
            
        exp = (exp/2) | 0;

        base = (base*base) % modulo;   
    } 
    return result; 
}

module.exports = (base,exp,modulo) => {
    
    validate(base, "pow");
    validate(exp, "pow");

    if( typeof modulo === "undefined" ){
        return pow(base, exp);
    }

    else{
        validate(modulo, "pow");
        return pow(base, exp, modulo);
    }
};