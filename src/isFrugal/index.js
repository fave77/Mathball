/*
    Frugal Numbers tester
    function name: isFrugal()
*/

const validate = require('../validation/positive-integer');

function genPrimeList(inp){

    let list = [];
    let count = 0 ,temp = inp;
    
    //testing for all multiples of 2
    while(temp%2 === 0)
    {
        count++;
        temp = temp / 2;
    }

    if(count > 0){
        list.push({num: 2, occurance: count});
    }

    //for the remaining odd numbers. Note that prime numbers will remove their non-prime multiples BEFORE any
    //non- prime number can appear
    for(let i = 3; i < temp/2 ; i +=2 ){
        count = 0;
        while(inp%i === 0)
        {
            count++;
            inp = inp / i;
        }
        if(count > 0){
            list.push({num: i, occurance: count});
        }
    }
    return list;
}

exports.isFrugal = inp => {
    validate(inp, 'isFrugal');
    
    let primeFactorisation = genPrimeList(inp);
    let factors_length = 0;
    let inp_length = inp.toString().length;

    for(let i = 0; i < primeFactorisation.length; i++){

        factors_length += primeFactorisation[i].num.toString().length;

        if(primeFactorisation[i].occurance > 1){
            factors_length += primeFactorisation[i].occurance.toString().length;
        }
    }
    
    return ((inp_length - factors_length) > 0)? true: false;
};