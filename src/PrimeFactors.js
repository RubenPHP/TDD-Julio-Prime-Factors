"use strict";

function PrimeFactors() {
}

PrimeFactors.prototype.result = [];

PrimeFactors.prototype.getPrimeFactors = function(number) {
	this.result = this.isPrime(number) ? [number] : [];
	
	if(this.result.length == 0) {
		var primeNumbers = [];
		
		for(var k=2; k<number; k++) {
			if(this.isPrime(k)) {
				primeNumbers.push(k);
			}
		}
		
		for(var i=0; i<primeNumbers.length; i++){
			var primeDivisor = primeNumbers[i],
			remainder = this.pushPrime(number, primeDivisor);
			
			while(remainder) {
				remainder = this.pushPrime(remainder, primeDivisor);
			}
		}
	}
	
	return this.result;
}


PrimeFactors.prototype.isPrime = function(number) {	
	var isPrime = true;
	
	for(var i=2; i<number; i++) {
		if(number%i==0) isPrime = false;
	}

	return isPrime;
}

PrimeFactors.prototype.pushPrime = function (number, divisor) {
	if(number % divisor == 0) {
		this.result.push(divisor);
		return number/divisor;
	} else {
		return false;
	}
}
