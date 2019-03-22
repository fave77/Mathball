/* Palindromic Number
 * Function: isPalindrome()
 * Function: rangePal() --> to return all palindromic numbers from 0 to end
 */

const validate = require('../validation/non-negative-integer');

exports.check = num => {
	validate(num, 'isPalindrome');
	return num == num.toString().split('').reverse().join('');
};

exports.range = (start, end) => {
	validate(start, 'rangePal');
	validate(end, 'rangePal');
	
	if(start > end)
	{
		throw new TypeError(
			`Starting number must be smaller than the ending number!!\n`
		);
	}
	let palinList = [], lim = 0;
	
	lim = (end < 10)? end : start;

	for(let i = start; i < lim; i++)
	{
		palinList.push(i);
	}

	for(let i = lim; i < end; i++)
	{
		if(i.toString() === i.toString().split('').reverse().join('')){
			palinList.push(i);
		}
	}

	return palinList;
};
