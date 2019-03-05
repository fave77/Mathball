/* Smart Number
 * Function: smart()
 */

const sort = require("../sort");
const validate = require('../validation/positive-integer');

exports.smart = num => {
	validate(num, 'smart');
	const size = 3000;
	var primes = new Array(size);
	for (var i = 0; i < size; i++) {
		primes[i] = 0;
	}
	var result = new Array();
	for (var i = 2; i < size; i++) {
		if (primes[i] === 0) {
			primes[i] = 1;
			for (var j = i * 2; j < size; j = j + i) {
				primes[j] = primes[j] - 1;
				if (primes[j] + 3 === 0) {
					result.push(j);
				}
			}
		}
	}
	sort(result);
	return result[num - 1];
};
