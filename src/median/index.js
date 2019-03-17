/* Function: median() */

const validate = require('../validation/number-array');

module.exports = arr => {
	validate(arr, 'median');
    arr.sort(function(a,b){
        return a-b;
      });
    
      var half = Math.floor(arr.length / 2);

      if (arr.length % 2){
        return arr[half];
      }
      else{
        return (arr[half - 1] + arr[half]) / 2.0;
      }
};
