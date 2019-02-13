/* Perfect Number
 * Function: isPerfect()
 */

const validate = require('../validation/positive-integer');

exports.isPerfect = num => {
    validate(num, 'isPerfect');
    var count  = 0;
    for(var i=1; i<num; i++)
    {
        if(num%i==0)
        {
            count=count+i;
        }
    }
   
	return count == num ? true:false;
};
