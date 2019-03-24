/* Nth Catalan Number
 * Function: nCrcatalan()
 */
 const validate = require('../validation/non-negative-integer');
 const nCr = require('../nCr/index.js');
 function nCrCatalan(num)
{
    if (num <= 1){
    	return 1;
    }
    let res = 0;
    for (let i=0; i<num; i++){
        res += nCr(i)*nCr(num-i-1);	
    }
    return res;
}
exports.find = num => {
	validate(num, 'nCrCatalan');
	return nCrcatalan(num);
};