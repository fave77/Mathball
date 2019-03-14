/*Matrix Chain Multiplication
*Function: M.matrixChain([])
*/

const validate = require('../validation/integer-array');

const matrixChain = (ar) => {
	let n = ar.length;
	let m = [...Array(n)].map(x => Array(n).fill(0));
	let cost, j;

	for(let i = 0; i < n; i++)
		m[i][i] = 0;

	for(let l = 2; l < n; l++){
		for(let i = 1; i < (n-l+1); i++){
			j = i + l - 1;
			m[i][j] = Number.MAX_SAFE_INTEGER;
			for(let k = i; k <= j-1; k++){
				cost = m[i][k] + m[k+1][j] +
						(ar[i-1]*ar[k]*ar[j]);
				if(cost < m[i][j])
					m[i][j] = cost;
			}
		}
	}
return m[1][n-1];
};

exports.matrixChain = (arr) => {
	validate(arr, 'matrixChain');
	return matrixChain(arr);
};
