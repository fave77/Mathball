/* N-th bell Number
 * Function: bell()
 */

const validate = require('../validation/non-negative-integer');

function bell(number){

    let bell = [...Array(number+1)].map(x => Array(number+1).fill(0));

    bell[0][0] = 1;

    for( let i=1; i<=number; i++ ){
        let temp = bell[i-1][i-1];
        bell[i][0] = temp;

        for( let j=1; j<=i; j++ ){
            let t1 = bell[i-1][j-1];
            let t2 = bell[i][j-1];
            bell[i][j] = t1 + t2;

        }

    }
    let v = bell[number][0];
    return v;

}

exports.find = num => {

    validate(num, 'bell');

    return bell(num);
    
};
