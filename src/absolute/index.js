/*Absolute value across all data-types and data-structures
*Function: M.abs(m,n)
*/
const Complex = require('../complex');
const validate = require('../validation/argument-length');

const abs = (a) => {
	switch(a.constructor){
	case Number:
		return absNum(a);
	case String:
		return absString(a);
	case Array:
		return absArray(a);
	case Complex:
		return absComplex(a);
	}
};

const absNum = (a) => {
	return Math.abs(a);
};

const absString = (a) => {
	let absolute = Math.abs(Number(a));
	return absolute.toString(10);
};

//Determinant of a matrix

function det(a,n){
        let determinant = 0, c1, c2, sign =  1;
        let detArr = [...Array(n)].map(x => Array(n).fill(0));
        if(n === 1){
                return a[0][0];
        }
        else if(n === 2){
                determinant = a[0][0]*a[1][1]- a[0][1]*a[1][0];
        return determinant;
        }
        else{
                for(let i = 0; i < n; i++){
                        c1 = 0, c2 = 0;
                        for(let j = 0; j < n; j++){

                        for(let k = 0; k < n; k++){
                                if(j != 0 && k != i){
                                        detArr[c1][c2] = a[j][k];
                                        c2++;
                                        if(c2 > n - 2){
                                        c1++;
                                        c2 = 0;
                                        }
                                }
                        }
                }
		determinant = determinant + sign*a[0][i]* det(detArr, n - 1);
		sign = -1*sign;
		}
		return determinant;
	}
}


const absArray = (a) => {
	if(a[0].length === undefined){
		return 0;
	}

	if(a.length !== a[0].length){
		throw new TypeError(`Invalid argument received: ${JSON.stringify(a)}\n'abs()' only accepts array with similar dimensions!\n`);
	}
        return Math.abs(det(a, a.length));
};

const absComplex = (a) => {
        return parseFloat(Math.sqrt(Math.pow(a.re , 2) + Math.pow(a.im , 2)).toFixed(2));
};

module.exports = (...args) => {
	if(args.length !== 1){
		throw new TypeError(`Invalid argument received: ${JSON.stringify(args)}\n'abs()' only accepts only one parameter!\n`);
	}
	validate(args);
        return abs(args[0]);
};
