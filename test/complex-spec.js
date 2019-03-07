const assert = require('assert'),
Complex = require('../src/complex'),
a = new Complex(3,2),
b = new Complex(2,1),
conjugate = a.conj,
add1 = a.add(5),
add2 = a.add(b),
sub1 = a.sub(1),
sub2 = a.sub(b),
mul = a.multiply(b),
mul1 = a.multiply(4),
div = a.divide(b),
div1 = a.divide(3);

describe('[Function: complex]', () => {
	it('should be an object', () => {
			assert.strictEqual(typeof a, 'object');

			});

	it('should return 3 when a.re is called', () => {
			assert.strictEqual(a.re, 3);
			});

	it('should return 2 when a.im is called', () => {
			assert.strictEqual(a.im, 2);
			});

	it('should return something when a.abs() is called', () => {
			assert.strictEqual(a.abs(), 3.61);
			});

	it('should return an object when a.add(5) is called', () => {
			assert.strictEqual(typeof add1, 'object');
			});

	it('should return 8 when add1.re is called', () => {
			assert.strictEqual(add1.re, 8);
			});

	it('should return an object when a.add(b) is called', () => {
			assert.strictEqual(typeof add2, 'object');
			});

	it('should return 5 when add2.re is called', () => {
			assert.strictEqual(add2.re, 5);
			});

	it('should return 3 when add2.im is called', () => {
			assert.strictEqual(add2.im, 3);
			});

	it('should return an object when a.conj is called', () => {
			assert.strictEqual(typeof conjugate, 'object');
			});

	it('should return -2 if conjugate.im is called', () => {
			assert.strictEqual(conjugate.im, -2);
			});

	it('should return 3 when conjugate.re is called', () => {
			assert.strictEqual(conjugate.re, 3);
			});

	it('should return an object when a.sub(1) is called', () => {
			assert.strictEqual(typeof sub1, 'object');
			});

	it('should return 2 when sub1.re is called', () => {
			assert.strictEqual(sub1.re , 2);
			});

	it('should return 2 when sub1.im is called', () => {
			assert.strictEqual(sub1.im, 2);
			});

	it('should return an object when a.sub(b) is called', () => {
			assert.strictEqual(typeof sub2, 'object');
			});

	it('should return 1 when sub2.re is called', () => {
			assert.strictEqual(sub2.re, 1);
			});

	it('should return 1 when sub2.im is called', () => {
			assert.strictEqual(sub2.im, 1);
			});

	it('should return an object when a.multiply(b) is called', () => {
			assert.strictEqual(typeof mul, 'object');
			});

	it('should return 4 when mul.re is called', () => {
			assert.strictEqual(mul.re, 4);
			});

	it('should return 7 when mul.im is called', () => {
			assert.strictEqual(mul.im, 7);
			});

	it('should return 12 when mul1.re is called', () => {
			assert.strictEqual(mul1.re, 12);
			});

	it('should return an object when a.divide(b) is called', () => {
			assert.strictEqual(typeof a.divide(b), 'object');
			});

	it('should return 1.6 when div.re is called', () => {
			assert.strictEqual(div.re, 1.6);
			});

	it('should return 0.2 when div.im is called', () => {
			assert.strictEqual(div.im, 0.2);
			});

	it('should return 1 when div1.re is called', () => {
		assert.strictEqual(div1.re, 1);
	});

	it('should throw an error when argument passed is string', () => {
			assert.throws(() => {
					const an = new Complex("4", "3");
					}
					, TypeError);
			});

	it('should throw an error when a non-number is passed', () => {
		assert.throws(() => {
				const b = new Complex(2,4);
				b.add([3]);
					}
					, TypeError);
	});
});
