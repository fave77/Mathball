const validate = require('../validation/positive-integer');

/**
 * Find all divisors of a positive number and return an array of the same
 */
const findDivisors = num => {
	let divisorsArr = [0];

	if (num === 1) {
		divisorsArr = [0];
	} else {
		for (let i = 1; i < num - 1; i++) {
			if (num % i === 0) {
				divisorsArr.push(i);
			}
		}
	}

	return divisorsArr;
};

/**
 * add all divisors
 */
const addAllDivisors = arr => {
	const add = (total, num) => total + num;
	return arr.reduce(add);
};

module.exports = num => {
	validate(num, 'deficient');
	let divisors = findDivisors(num);
	let sum = addAllDivisors(divisors);

	return sum < num ? true : false;
};

// console.log(d(10));
