const validate = require('../validation/integer');
const pi = 22/7;
exports.toRadian = num => {
	validate(num, 'toRadian');
	return (num * (pi/180));
};
