/* Palindromic Number
 * Function: isPalindrome()
 */

const validate = require('../validation/non-negative-integer');

exports.isPalindrome = num => {
	validate(num, 'isPalindrome');
	return num == num.toString().split('').reverse().join('');
};
