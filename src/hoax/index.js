/* Hoax Number
 * Function: isHoax()
 */

const validate = require('../validation/positive-integer');
const isEven = require('../isEven/index');

function getPrimeFactors(n){
    let factors = [];
    
    // Reduce the number to odd as even numbers will only result in a single factor i.e '2'
    if(isEven(n)){
        factors.push(2);
        while(isEven(n)){
            n /= 2; 
        }
    }

	//Now we have a odd number and we will increment by 2 because we only need to check for next odd number if it's a factor or not
	for(let i=3; i <= Math.sqrt(n); i=i+2){
        // If i is a factor, add it to the list
        if(n%i === 0){
            factors.push(i);
            while(n%i === 0){ // so that factor is added only once
                n /= i;
            }
        }
    }

    //Check if n itself becomes a prime
    if(n > 2){
        factors.push(n);
    }

    return factors;
}

function getSumOfDigits(n){
    let sum = 0;
    while(n !== 0){
        sum += n%10;
        n = Math.floor(n/10);
    }
    return sum;
}

function getSumOfFactors(factors){
    let sum = 0;
    for (let i=0;i<factors.length;i++){
        sum += getSumOfDigits(factors[i])
    }
    return sum;
}

exports.isHoax = num => {
    validate(num, 'isHoax');
    let factors = getPrimeFactors(num);
    //If num itself is a prime, then length of factors will be only 1
    if(factors.length === 1){
        return false;
    }

    let sumOfNum = getSumOfDigits(num);
    let sumOfFactors = getSumOfFactors(factors);

    return sumOfNum == sumOfFactors;
};