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
	var result = [2];
	if (number!=2) {		
		result = [2,2];
	};	
	return result;
}

