const validate = require('../validation/positive-integer');
const check = require('../check');
/**
 * hoax Number
 */

/**
 * find distinct prime factors
 */
const findPrimeFactors = (num) => {
  const primeFactorArr = [];

  if (num % 2 === 0) {
    while (num % 2 === 0) {
      num /= 2;
    }
    primeFactorArr.push(2);
  }

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    // Check if i is prime factor
    if (num % i === 0) {
      while (num % i === 0) {
        num /= i;
      }
      primeFactorArr.push(i);
    }
  }

  if (num > 2) {
    primeFactorArr.push(num);
  }
  return primeFactorArr;
};

/**
 * check if the number is a hoax
 */
const isHoaxNumber = (num) => {

if(check('prime')(num) === true){
	return false;
}
else{
  num = num.toString();
  const primeFactor = findPrimeFactors(num);
  const sumofNum = num
    .split('')
    .map(val => Number(val))
    .reduce((a, b) => a + b);

let sumOfPrimeFactor = 0;
for(let i = 0; i < primeFactor.length; i++){
	let sum = 0;
	let pf = primeFactor[i];
	while(pf > 0){
		sum +=  pf % 10;
		pf = parseInt((pf / 10),10);
	}
	sumOfPrimeFactor += sum;
}

  return sumofNum === sumOfPrimeFactor;
}
};

exports.check = (num) => {
  validate(num);
  return isHoaxNumber(num);
};
