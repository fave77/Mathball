/*
 * Array and object validation 
 */

module.exports = (arg, func) => {
	let isValid = false;

	if (typeof arg === 'string') {
		isValid = true;
	}
	else if (arg.constructor === Array) {
		isValid = true;
	}
	else if(arg.constructor === Object){
		isValid = true;
	}
	else {
		isValid = false;
	}

	if (!isValid) {
		throw new TypeError(
			`Invalid argument received -  ${JSON.stringify(
				arg
			)}\n'${func}()' only accept an Array or a String!\n`
		);
	}
};
