/* Function to check if number is a stormer number
    Function name: isStormer()
*/

const validate = require("../validation/positive-integer");

function maxPrimeFactor(inp){

    let maxPrime = 1;
    
    let temp = inp;
    //testing for all multiples of 2
    while(temp%2 === 0)
    {
        maxPrime = 2;
        temp = temp / 2;
    }
    //for the remaining odd numbers. Note that prime numbers will remove their non-prime multiples BEFORE any
    //non- prime number can appear
    for(let i = 3; i <= temp ; i += 2){
        while(inp%i === 0)
        {
            maxPrime = i;   
            inp = inp / i;
        }
    }
    return maxPrime;
}

exports.check = n => {

    validate(n, 'isStormer');
    let largPFactor = maxPrimeFactor((n*n+1));
    
    return (largPFactor >= 2*n)?true:false;
};
