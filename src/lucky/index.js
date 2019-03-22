/* Lucky Number
 * Function: isLucky()
 */

const validate = require('../validation/positive-integer');

exports.check = num => {
	validate(num, 'isLucky');
	var counter = 2;
	while (true) {
		if (counter > num) {
			return true;
		} else if (num % counter === 0) {
			return false;
		}
		num = num - Math.floor(num / counter);
		counter++;
	}
};
