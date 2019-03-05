const validate = require('../validation/integer');
const pi = 22/7;
exports.toDegree = num => {
	validate(num, 'toDegree');
	return (num * (180/pi));
};

