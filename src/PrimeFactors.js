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
				
				var nextnext = next / 2;
				
				if (nextnext%2==0) {
					result.push(2);
				} else if (next%3==0) {
					result.push(3);
				}
				
			} else if (next%3==0) {
				result.push(3);
			}
		} 
		else if(number%3==0){
			result.push(3);
			
			var next = number / 3;
			
			if (next%2==0) {
				result.push(2);
			} else if (next%3==0) {
				result.push(3);
			}
		}		
	}
	
	return result;
}

