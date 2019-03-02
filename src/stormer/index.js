/* Stormer Number
 * Function: isStormer()
 */


const validate = require("../validation/positive-integer");

/**
 *
 * @param {number} number
 * @returns {list of number}
 */

 function maxPrimeFactors(number) {
    var maxPrime = -1, i;

    while (number % 2 === 0) {
        maxPrime = 2;
        number /= 2;
    }

    for (i = 3; i < (number * 1 / 2 + 1); i = i + 2) {
        while (number % i === 0) {
            maxPrime = i;
            number /= i;
        }

    if (number > 2) {
      maxPrime = number;
    }

    return maxPrime;
}

function isStormer(number) {
    let i = 1;
    let result = [];
    let count = 0;
    while (count < number) {
        let t = i * i + 1;
        if (maxPrimeFactors(t) >= 2 * i) {
            count << i;
            count << " ";
            count += 1;
        }
        result.push(i);
        i += 1;
    }
    return result;
}

exports.factorial = num => {
 validate(num, 'isStormer');
 return isStormer(num);
};
