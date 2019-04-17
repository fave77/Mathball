const validate = require('../validation/count');

const deepCompare = (var1, var2) => {
  if((typeof var1 === "string" || typeof var1 === "number")&&(typeof var2 === "string" || typeof var2 === "number")){
    return var1 === var2;
  }
  else if(Array.isArray(var1) && Array.isArray(var2)){
    return (var1.filter(val => var2.includes(val)).length === var1.length && var1.length === var2.length);
  }
  else{
    for(var ele in var1){
      if(var1.hasOwnProperty(ele) !== var2.hasOwnProperty(ele)){
        return false;
      }
      else{
            if (!deepCompare(var1[ele], var2[ele])){
              return false;
            }                
        }
      }
    }
  return true;
};

/**
* Find the occurance count of a phrase
* @param {string} str
* @param {string} occurance
*/
const findStroccurance = (str, occurance) => {
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
* Find the occurance count of a phrase
* @param {object} obj
* @param {string|number|object} occurance
*/
const findObjOccurance = (obj, occurance) => {
    let count = 0;
    let keyVals = Object.keys(obj);

    for(let i = 0; i < keyVals.length; i++){
        if(deepCompare(occurance, obj[keyVals[i]])){              //obj[keyVals[i]] === occurance
            count++;
        }
    }
    return count;
};

/**
 * Frequency
 *
 * `count()` accepts two arguments and return the occurance of second argument in first
 * @param {string|number|string[]|number[]|object} arg - Accepts either a String or an Array
 * @param {string|number|object} occurance - The phrase or array item you want to find
 */
module.exports = (...args) => {
  if(args.length > 2){
    throw new TypeError(`Invalid input received! 'count()' does
    not accept more than 2 parameters!`);
  }
  let arg = args[0], occurance = args[1];
  validate(arg, 'count');
  
  if (arg && arg.constructor === Array) {
    return (arg = arg.filter(val => val === occurance).length);
  }
  else if(arg.constructor === Object){
      return findObjOccurance(arg, occurance);
  }
  else {
    return findStroccurance(arg, occurance);
  }
};
