const validate = require('../validation/integer');
const pi = 22/7;

function toRadian(num) 
{
	return (num * (pi/180));
	 
}

exports.toRadian = num => {
	validate(num, 'toRadian');
	return toRadian(num);
};

