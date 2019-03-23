/* Harshad Number
 * Function: isHarshad()
 */

const validate = require('../validation/positive-integer');

function isHarshad(num){
	let sum = 0;
	for(let i=num;i>0;i=parseInt(i/10,10)){
		sum+=i%10;
	}
	return num%sum === 0;
}
exports.check = num => {
	validate(num, 'isHarshad');
	return isHarshad(num);
};
