/* Carmichael Number
* Function: isCarmichael()
*/

const validate = require('../validation/positive-integer');
const prime = require('../prime').check;

function squarefree(i){
	for(let k = 2; (k <= Math.sqrt(i) && i % k !== 0 && i/k % k !== 0); k++){
		return true;
	}
}

function isCarmichael(n){
	let c = 0;
	for(let i = 1; i <= n; i++){
		if(n % i == 0){
			if(prime(i) && ((n-1) % (i-1) == 0)){
				c++;
				if(c >= 3 && i % 2 != 0 && squarefree(i)){
					return true;

				}
			}
		}
	}
	return false;
}
exports.isCarmichael = n => {
	validate(n, 'isCarmichael');
	return isCarmichael(n);
};
