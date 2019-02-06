/* Function: sort() */

const validate = require('../validation/number-array');

function validateSecondArg(arg, order) {
	if(typeof order != 'boolean')
		throw new TypeError(`Invalid argument received: ${JSON.stringify(arg)}, ${order}\n'sort()' only accept an array of real numbers and boolean <optional> as the arguments!\n`);
}

module.exports = (arr, ascend = true) => {
	validate(arr, 'sort');
	validateSecondArg(arr, ascend);
	return arr.sort((prev, next) => ascend ? prev - next : next - prev);
};
