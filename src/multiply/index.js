/*Multiplication across all data-types and data-structures
*Function: M.mul(m,n)
*/
const Complex = require('../complex');
const validate = require('../validation/argument-length');

const mul = (a,b) => {
	switch(a.constructor){
	case Number:
		return mulNum(a,b);
	case String:
		return mulString(a,b);
	case Array:
		if(a[0].constructor === Array){
			return	mulMatrix(a,b);
		}
		else{
			 return mulArray(a,b);
		}
	case Complex:
		return mulComplex(a,b);
	}
};

const mulNum = (a,b) => {
	return a * b;
};

const mulString = (a,b) => {
	let pro = Number(a) * Number(b);
	return pro.toString(10);
};

const mulArray = (a,b) => {
	let pro = new Array(a.length);
	for(let i = 0; i < a.length; i++){
		let l = a[i] * b[i];
		pro.push(l);
		pro = pro.filter(n => n);
	}
	return pro;
};

const mulMatrix = (a,b) => {
        let pro = [...Array(b.length)].map(x => Array(b[0].length).fill(0));
        for(let i = 0; i < a.length; i++){
                for(let j = 0; j < b[0].length; j++){
			let sum = 0;
			for(let k = 0; k < a[0].length; k++){
				sum += a[i][k] * b[k][j];
			}
			pro[i][j] = sum;
                }
        }
        return pro;
};

const mulComplex = (a,b) => {
        let pro = {
                re: 0,
                im: 0
                };
        pro.re = a.re * b.re;
	pro.im = a.im * b.im;
        return pro;
};

module.exports = (...args) => {
	if(args.length > 2){
		throw new TypeError(`Invalid argument received: ${JSON.stringify(args)}\n'mul()' only accepts two parameters!\n`);
	}
	validate(args);
        return mul(args[0], args[1]);
};
