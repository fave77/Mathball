/* Function: lcm() */

function gcd(a, b) {
  return (a == 0) ? b : gcd(b % a, a);
}

function validate(arg) {
	let flag = 0;
	if(arg && arg.constructor == Array)
		arg.forEach(item => {
			if(typeof item != 'number' || item + 1 == item || item != item || !Number.isInteger(item)) flag = 1;
		});
	if(!arg || arg.constructor != Array || flag)
		throw new TypeError(`Invalid argument received: ${JSON.stringify(arg)}\n'lcm()' only accept an array of positive integers!\n`);
}

module.exports = arr => {
	validate(arr);
	return arr.reduce((prev, next) => (prev * next) / gcd(prev, next), arr[0]);
};
