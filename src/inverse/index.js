/* Modular Multiplicative Inverse
* function : modInv()
*/

const validate = require('../validation/integer');

const gcd = require('../gcd');

function modInv(a , m) {
        let arr = [a,m];
        if(gcd(arr) == 1) {
		for(var i = 1; i < m ; i++)
			if((a * i) % m == 1)
				return i;
	    }
        else
          return 0;
}

module.exports = (a,m)  => {
	validate(a , 'modInv');
    validate(m, 'modInv');
	return modInv(a,m);
};
