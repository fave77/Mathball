module.exports = arg => {
	const number = require(`../${arg}`);
	if('check' in number){
		return number.check;
	} else {
		throw new TypeError(
			`Error: Invalid Argument! \n
			 Module '${JSON.stringify(arg)}' does not support 'check()'!`
		);
	}
};
