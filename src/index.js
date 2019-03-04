const validate = require('../validation/integer');
const pi = 22/7;

function toDegree(num) {
	return (num * (180/pi));
	 
}

exports.toDegree = num => {
	validate(num, 'toDegree');
	return toDegree(num);
};

