/* nCr
 * Function: nCr()
 */

const validate = require('../validation/non-negative-integer');

/**
 *
 * @param {number, number} number
 * @returns {number}
 */

function nCr(number1, number2) {

	let res = 1;
	let i = 0;
	if(number2>number1-number2){
		number2=number1-number2;
	}
	for(; i<number2; ++i){
		res*=(number1-i);
		res/=(i+1);
	}
  return res;
}

exports.nCr = (number1, number2) => {
	validate(number1, 'nCr');
	validate(number2, 'nCr');
	if(number1 < number2){
	throw new TypeError(
		`n >= r condition not satisfied.\n`
		);
  }
 return nCr(number1, number2);
};
