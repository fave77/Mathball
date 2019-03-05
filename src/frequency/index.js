const validate = require('../validation/frequency');

/**
* Find the occurence count of a phrase
* @param {string} str
* @param {string} occurance
*/
const findStrOccurence = (str, occurance) => {
  let count = 0;
  let flag = -1;

  do {
    flag = str.indexOf(occurance, flag + 1);
    if (flag !== -1) {
      count++;
    }
  } while (flag !== -1);

  return count;
};


/**
 * Frequency
 *
 * `frequency()` accepts two arguments and return the occurance of second argument in first
 * @param {string|number|string[]|number[]} arg - Accepts either a String or an Array
 * @param {string|number} occurence - The phrase or array item you want to find
 */
module.exports = (arg, occurence) => {
  validate(arg, 'frequency');
  
  if (arg && arg.constructor === Array) {
    return (arg = arg.filter(val => val === occurence).length);
  } else {
    return findStrOccurence(arg, occurence);
  }
};