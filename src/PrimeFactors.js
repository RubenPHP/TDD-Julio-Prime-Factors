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

PrimeFactors.prototype.result = [];

PrimeFactors.prototype.getPrimeFactors = function(number) {
	this.result = this.isPrime(number) ? [number] : [];
		
	if(this.result.length == 0) {
		
		var k;
		
		k = this.pushPrime(number, 2);
		while(k) {
			k = this.pushPrime(k, 2);
		}
		
		k = this.pushPrime(number, 3);
		while(k) {
			k = this.pushPrime(k, 3);
		}
		
		k = this.pushPrime(number, 7);
		while(k) {
			k = this.pushPrime(k, 7);
		}
	}
	
	return this.result;
}

PrimeFactors.prototype.pushPrime = function (number, divisor) {
	if(number % divisor == 0) {
		this.result.push(divisor);
		return number/divisor;
	} else {
		return false;
	}
}
