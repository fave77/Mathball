const validate = require('../validation/any-type-ofarray');
module.exports = (arr1, arr2) => {
    
    validate(arr1, 'union');
    validate(arr2, 'union');

	return Array.from(new Set([...arr1, ...arr2]));
};
