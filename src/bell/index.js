/* Nth Bell Number
 * Function: bell()
 */

const validate = require('../validation/non-negative-integer');

function bell(number){

    let bell = [...Array(number+1)].map(x => Array(number+1).fill(0));

    bell[0][0] = 1;

    for( let i=1; i<=number; i++ ){

        bell[i][0] = bell[i-1][i-1];

        for( let j=1; j<=i; j++ ){

            bell[i][j] = bell[i-1][j-1] + bell[i][j-1];

        }

    }

    return bell[number][0];

}

exports.bell = num => {

    validate(num, 'bell');

    return bell(num);
    
}