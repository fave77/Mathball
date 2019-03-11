/**
 * Find nth Ugly Number
 */
const validate = require('../validation/positive-integer');

const maxDivide = (num, a) => {
  while (num % a === 0) {
    num /= a;
  }

  return num;
};

const isUgly = (num) => {
  num = maxDivide(num, 2);
  num = maxDivide(num, 3);
  num = maxDivide(num, 5);

  return num === 1;
};

const getNthUglyNumber = (n) => {
  let count = 1;
  let i = 1;

  while (n > count) {
    i += 1;

    if (isUgly(i)) {
      count += 1;
    }
  }

  return i;
};

exports.ugly = (n) => {
  validate(n, 'ugly');

  return getNthUglyNumber(n);
};
