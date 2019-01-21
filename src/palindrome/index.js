/* Palindromic Number
 * Function: isPalindrome()
 */

function validate(arg) {
	if(typeof arg != 'number' || arg + 1 == arg || arg != arg || arg < 0 || !Number.isInteger(arg))
		throw new TypeError(`Invalid argument recieved: ${JSON.stringify(arg)}\n'isPalindrome()' only accept a non-negative integer!\n`);
}

exports.isPalindrome = num => {
	validate(num);
	return num == num.toString().split('').reverse().join('');
};
