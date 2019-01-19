/* Factorial of a Number
 * Function: factorial()
 */

const validateInput = number => {
	if (!Number.isInteger(number) || number < 0) {
		throw new TypeError(
			`Invalid argument recieved number: ${number}, 'factorial()' only accept non-negative integer.`
		)
	}
}

/**
 *
 * @param {number} number
 * @returns {number}
 */
const factorial = number => {
	validateInput(number)
	let i = 1,
		result = 1
	for (; i <= number; i++) {
		result = result * i
	}
	return result
}

module.exports = factorial
