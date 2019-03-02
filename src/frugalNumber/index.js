/* Frugal Number
 * Function: isFrugal()
 */

const prime = require('../prime')
const validate = require('../validation/positive-integer');

/**
 *
 * @param {number} number
 * @returns {number}
 */

function primeFactors (n) {
  let tn = n, i = 2;
  let m = {};
  while (i < n / 2) {
    tn = n;
    if (tn % i === 0 && prime.isPrime(i)) {
      let count = 0;
      while (tn > 0) {
        if (tn % i == 0) {
          count += 1;
          tn /= i;
        }
        else
          break;
      }
      if (count)
        m[i] = count;
    }
    i += 1;
  }
  return m;
}

function digits (n) {
  let cd = 0;
  while (n) {
    cd += 1;
    n = Math.floor(n/10);
  }
  return cd;
}

function isFrugal(n) {
  if (n < 125)
    return false;
  if (prime.isPrime(n))
    return false;
  let m = primeFactors(n);
  let nd = digits(n);
  let count = 0;
  for (let key in m) {
    if (m[key] === 1)
      count += digits(key);
    else if (m[key] > 1)
      {
        count += digits(key);
        count += digits(m[key]);
      }
  }
  if (count < nd)
    return true;
  return false;
}

exports.isFrugal = num => {
    validate(num, 'isFrugal');
    return isFrugal(num);
};
