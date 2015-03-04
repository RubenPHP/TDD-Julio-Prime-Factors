"use strict";

function PrimeFactors() {
}

PrimeFactors.prototype.isPrime = function(number) {	
	var isPrime = true;
	
	for(var i=2; i<number; i++) {
		if(number%i==0) isPrime = false;
	}

	return isPrime;
}

PrimeFactors.prototype.getPrimeFactors = function(number) {
	var result = this.isPrime(number) ? [number] : [];
	if (result.length == 0)
	{
		if (number%2==0) {		
			result.push(2);
			
			var next = number / 2;
			
			if (next%2==0) {
				result.push(2);				
				this.pushPrimeFactors(next,2,2,3, result);
				
			} else if (next%3==0) {
				result.push(3);				
				if (number>12){
					this.pushPrimeFactors(number,3,3,3, result);
				}
			}
		} 
		else if(number%3==0){
			result.push(3);
			this.pushPrimeFactors(number,3,2,3, result);
		}		
	}
	
	return result;
}

PrimeFactors.prototype.pushPrimeFactors = function(number, divisor, prime1, prime2, result){
	var nextnext = number / divisor;
				
	if (nextnext%prime1==0) {
		result.push(prime1);
	} else if (number%prime2==0) {
		result.push(prime2);
	}
}
