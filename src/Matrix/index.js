/*Matrix Functionalities
Use: M.Matrix.functionality('string')
*/

const matrixValidate = require('../validation/integer-matrix');
const stringValidate = require('../validation/string');
const integerValidate = require('../validation/positive-integer');
const matrixSortTypeValidate = require('../validation/matrix-sort-type');

const matrixChain = require('../matrixChain').matrixChain;
const matrixExpo = require('../matrixExponentiation').matrixExpo;

const checkSquare = (matrix) => {
	let len = matrix.length;
	for(let i = 0; i < len; i++){
		if(matrix[i].length !== len){
			return 0;
		}
	}
	return 1;
};

class Matrix{
	constructor(args){
		matrixValidate(args, 'Matrix');
		this.args = args;
	}
	static chainOrder(arr){
		return matrixChain(arr);
	}

	loc(row, col){
		integerValidate(row, 'loc');
		integerValidate(col, 'loc');
		let arr = this.args;
		return arr[row - 1][col - 1];
	}

	diag(type){

		stringValidate(type, 'diag');
		let arr = this.args, checkSq = checkSquare(arr);
		if(checkSq !== 1){
			throw new TypeError(`Invalid argument: '${arr}' received! 'diag()' only returns diagonals of square matrices!`);
	}
	else{
		switch(type){

		case 'primary':

		let primary = [], k = 0;
		for(let i = 0; i < arr.length; i++){
				primary[k++] = arr[i][i];
		}
		return primary;

		case 'secondary':

		let secondary = [], p = 0;
		for(let i = 0; i < arr.length; i++){
			secondary[p++] = arr[i][arr.length - i - 1];
		}
		return secondary;

		default:
			throw new TypeError(`Invalid argument '${type}' received!`);
			}
		}
	}

	check(property){

		stringValidate(property, 'check');
		let arr = this.args;

		switch(property){

		case 'square':
			return (checkSquare(arr) === 1)? true: false;

		case 'identity':
			if(checkSquare(arr)){
			for(let i = 0, j = 0; i < arr.length && j < arr[0].length; i++, j++){
					if(i === j && arr[i][j] !== 1 && arr[j][i] !== 0){
							return false;
						}
					}
					return true;
				}
				throw new TypeError(`Invalid argument received: '${arr}', the matrix has to be square to check '${property}' property!`);

		case 'upper-triangular':
			if(checkSquare(arr)){
			for(let i = 1, j = 0; i < arr.length && j < i; i++){
					if(arr[i][j] !== 0){
						return false;
						}
					}
				return true;
			}
			throw new TypeError(`Invalid argument received: '${arr}', the matrix has to be square to check '${property}' property!`);

		case 'lower-triangular':
		if(checkSquare(arr)){
		for(let i = 0, j = i + 1; i < arr.length && j < arr[0].length; i++, j++){
				if(arr[i][j] !== 0){
					return false;
					}
				}
				return true;
			}
		throw new TypeError(`Invalid argument received: '${arr}', the matrix has to be square to check '${property}' property!`);

		default:
			throw new TypeError(`Invalid argument '${property}' received!`);
		}
	}

	pow(a){
		integerValidate(a, 'pow');
		return matrixExpo(this.args, a);
	}

	transpose() {
		let arr = this.args;
		const col = arr.length;
		const row = arr[0].length;
		let tarr = [];

		for (let i = 0; i < row; i++) {
			tarr[i] = [];
		}
		for (let i = 0; i < row; i++) {
			for (let j = 0; j < col; j++) {
				tarr[i][j] = arr[j][i];
			}
		}
		return tarr;
	}

	sort(type) {
		matrixSortTypeValidate(type, 'sort');
		switch (type) {
			case 'row':
				let arr = this.args;
				for (let i = 0; i < arr.length; i++) {
					arr[i].sort();
				}
				this.args = arr;
				return arr;

			case 'col':
				this.args = this.transpose();
				let tarr = this.args;
				for (let i = 0; i < this.args.length; i++) {
					tarr[i].sort();
				}
				this.args = this.transpose();
				return this.args;
		}
	}
}

module.exports = Matrix;
