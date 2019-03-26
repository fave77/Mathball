/* Function: pipe() */
const validate = require('../validation/pipe'),
	add = require('../add'),
	sub = require('../subtract'),
	mul = require('../multiply'),
	div = require('../divide'),
	abs = require('../absolute'),
	sum = require('../sum');

module.exports = arg => {
	validate(arg, 'pipe');
	let cache = arg;
	let pipe = {
		add(...args) {
			cache = add(cache, ...args);
			return this;
		},
		sub(...args) {
			cache = sub(cache, ...args);
			return this;
		},
		mul(...args) {
			cache = mul(cache, ...args);
			return this;
		},
		div(...args) {
			cache = div(cache, ...args);
			return this;
		},
		abs() {
			cache = abs(cache);
			return this;
		},
		sum() {
			cache = sum(cache);
			return this;
		},
		done() {
			return cache;
		}
	};
	return pipe;
};
