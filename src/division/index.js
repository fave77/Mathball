/*Division operation across all data-types and data-structures
* Function: M.div(m,n)
*/
const Complex = require('../complex');
const validate = require('../validation/argument-length');

const div = (a,b) => {
	switch(a.constructor){
	case Number:
		return divNum(a,b);
	case String:
		return divString(a,b);
	case Array:
		if(a[0].constructor === Array){
			return	divMatrix(a,b);
		}
		else{
			 return divArray(a,b);
		}
	case Complex:
		return divComplex(a,b);
	}
};

const divNum = (a,b) => {
	return a / b;
};

const divString = (a,b) => {
	let div = Number(a) / Number(b);
	return div.toString(10);
};

const divArray = (a,b) => {
	let div = new Array(a.length);
	for(let i = 0; i < a.length; i++){
		let l = a[i] / b[i];
		div.push(l);
		div = div.filter(n => n);
	}
	return div;
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
		determinant = determinant + sign * a[0][i] * det(detArr, n - 1);
		sign = -1 * sign;
		}
		return determinant;
	}
}
function co_factor(a,temp, p, q, n) {
	let i = 0, j = 0;
	for(let row = 0; row < n; row++){
		for(let col = 0; col < n; col++){
			if(row !== p && col != q){
				temp[i][j++] = a[row][col];
			if(j === n - 1){
				j = 0;
				i++;
				}
			}
		}
	}
}
function _adjugate(a){
	let n = a.length;
	let adj = [...Array(n)].map(x => Array(n).fill(0));
	let temp = [...Array(n)].map(x => Array(n).fill(0));
	if(n === 1){
		return 1;
	}

	let sign = 1;

	for(let i = 0; i < n; i++){
		for(let j = 0; j < n; j++){

			co_factor(a,temp,i,j,n);
			sign = ((i + j) % 2 === 0 ? 1: -1);
			adj[j][i] = sign * det(temp, n - 1);
		}
	}
	return(adj);
}

function inverse(a){
	let n = a.length;
	let determinant = det(a, n);
	if(determinant === 0){
		return 0;
	}
	let inv = [...Array(n)].map(x => Array(n).fill(0));
	let adj = _adjugate(a);

	if(adj === 1){
		return 1;
	}

	for(let i = 0; i < n; i++){
		for(let j = 0; j < n; j++){
			inv[i][j] = Number(parseFloat(adj[i][j]/determinant).toFixed(2));
		}
	}
	return inv;
}

const divMatrix = (a,b) => {
	b = inverse(b);
	if(b === 0){
		return 0;
	}

	if(b === 1){
		return 1;
	}

        let div = [...Array(a.length)].map(x => Array(a[0].length).fill(0));
	for(let i = 0; i < a.length; i++){
		for(let j = 0; j < b.length; j++){
			let sum = 0;
			for(let k = 0; k < a[0].length; k++){
				let pro = a[i][k] * b[k][j];
				sum = Math.round(sum + pro);
			}
		div[i][j] = sum;
		}
	}
	return div;
}

const divComplex = (a,b) => {
        let div = {
                re: 0,
                im: 0
                };
	let dm = Math.pow(b.re, 2) + Math.pow(b.im, 2)
        div.re = parseFloat(((a.re * b.re + a.im * b.re)/dm).toFixed(2));
	div.im = parseFloat(((b.re * a.im - a.re * b.im)/dm).toFixed(2));
        return div;
};

exports.div = (...args) => {
	if(args.length > 2){
		throw new TypeError(`Invalid argument received: ${JSON.stringify(args)}\n'div()' only accepts two parameters!\n`);
	}
	validate(args);
        return div(args[0], args[1]);
};
