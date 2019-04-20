/* Hexagonal Number
 * Function: nth hexagonal number()
 */

const validate = require('../validation/positive-integer');

function hex(num)
{
    return  num * (2 * num - 1);
} 

exports.find = num => {
	validate(num, 'hexagonal');
	return hex(num);
};
