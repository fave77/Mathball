/* Nth Catalan Number
 * Function: catalan()
 */

function validate(arg) {
	if (typeof arg != "number" || arg < 0 || !Number.isInteger(arg)) {
		throw new TypeError(
			`Invalid argument recieved: ${JSON.stringify(
				arg
			)}\n'catalan()' only accepts a non-negative integer!\n`
		);
	}
}

function binomialCoeff(n, k) {
	let res = 1;
	if (k > n - k) k = n - k;
	for (let i = 0; i < k; i++) {
		res = res * (n - i);
		res = res / (i + 1);
	}
	return res;
}

exports.catalan = num => {
	validate(num);
	let c = binomialCoeff(2 * num, num);
	return c / (num + 1);
};
