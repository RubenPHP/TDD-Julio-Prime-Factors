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
	var result = [1];
	if (number==2) {
		result = [2];
	} else if (number%2==0) {		
		result = [2, number/2];
	} else if (this.isPrime(number)) {
		result = [number];
	}	
	return result;
}

