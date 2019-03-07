/* Hoax Number
 * Function: isHoax()
 */
const validate = require('../validation/positive-integer');
function primeFactors(num){
	let res=[];
	if(num%2===0){
		while(num%2===0)
			num=num/2;
		res.push(2);
	}
	for(let i=3;i<=Math.sqrt(num);i=i+2){
		if(num%i==0){
			while(num%i==0)
				num=num/i;
			res.push(i);
		}
	}
	if(n>2)
		res.push(num)
	return res;
}
function isHoax(num){
	let pf=[];
	pf=primeFactors(num);
	if(pf[0]==num)
		return false;
	let all_pf_sum=0;
	for(let i=0;i<pf.length;i++){
		let pf_sum;
		for(pf_sum=0;pf_sum[i]>0;pf_sum+=pf[i]%10,pf[i]/=10);
	all_pf_sum;
	}
	int sum_n;
	for(sum_n=0;num>0;sum_n+=num%10,num/=10);
	return sum_n === all_pf_sum;
}
exports.isHoax = num => {
	validate(num, 'isHoax');
	return isHoax(num);
}; 