/*
 * Performance Validation
 */

module.exports = (arg1, arg2, func) => {
	if(arg2.length > 3) {
		throw new RangeError(
			`${func}() can measure the function execution time with atmost 3 arguments!\n`
		);
	} else if(!(arg1 && typeof arg1 == 'function'))
		throw new TypeError(
			`Invalid arguments received!\n'${func}()' accept a function and its corresponding arguments!\n`
		);
}
