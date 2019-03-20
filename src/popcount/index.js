/* Function: popcount() */

const validate = require('../validation/positive-integer');

function popcount(num) {
	let count = 0;
    while (num){ 
        num &= (num-1);  
        count++;
    }
    return count;
 }

module.exports = num => {
	validate(num, 'popcount');
	return popcount(num);
};
