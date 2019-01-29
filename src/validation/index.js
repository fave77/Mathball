exports.validatePositiveInteger = (arg, funcName) => {
	if (typeof arg != "number" || arg < 1 || !Number.isInteger(arg)) {
		throw new TypeError(
			`Invalid argument recieved: ${JSON.stringify(
				arg
			)}\n${funcName} only accepts a positive integer!\n`
		);
	}
};
