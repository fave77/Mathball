/* Palindromic Number
 * Function: isPalindrome()
 */

const validate = require('../validation/non-negative-integer');

exports.isPalindrome = num => {
	validate(num, 'isPalindrome');
	return num == num.toString().split('').reverse().join('');
};

/* Range Of Palindromes Numbers
 * Function: rangePalindrome()
 */

exports.rangePalindrome = num => {
  validate(num, 'rangePalindrome');

  const palindromes = [];
  for (let i = 0; i <= num; i++) {
    if (i == i.toString().split('').reverse().join('')) {
      palindromes.push(i);
    }
  }
  return palindromes;
};
