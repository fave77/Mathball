let M = require('mathball');

console.log(M.check('palindrome')(1551)); /* true */
console.log(M.check('even')(7)); /* false */
console.log(M.sum([4, 5, 9])); /* 18 */

a=[2,-1,0,9,8];
b=M.sort(a,true);
console.log(b);
