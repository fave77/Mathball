/* Hoax Number
 * Function: isHoax()
 */
const validate = require('../validation/positive-integer');
function primeFactors(num){
	let res=[];
	if(num%2===0){
		while(num%2===0){
			num=num/2;
		}
		res.push(2);
	}
	for(let i=3;i<=Math.sqrt(num);i=i+2){
		if(num%i===0){
			while(num%i===0){
				num=num/i;
			}
			res.push(i);
		}
	}
	if(num>2){
		res.push(num);
	}
	return res;
}
function isHoax(num){
	let pf=[];
	pf=primeFactors(num);
	if(pf[0]===num){
		return false;
	}
	let allPfsum=0;
	for(let i=0;i<pf.length;i++){
		let pfSum;
		for(pfSum=0;pfSum[i]>0;pfSum+=pf[i]%10,pf[i]/=10){
			;
		}
	allPfsum;
	}
	let sumN;
	for(sumN=0;num>0;sumN+=num%10,num/=10);
	return sumN === allPfsum;
}
exports.isHoax = num => {
	validate(num, 'isHoax');
	return isHoax(num);
}; 