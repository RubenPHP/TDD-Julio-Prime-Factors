"use strict";

function PrimeFactors() {	
	this.primeNumbers = [];
}

PrimeFactors.prototype.result = [];

PrimeFactors.prototype.getPrimeFactors = function(number) {
	this.result = this.isPrime(number) ? [number] : [];
	
	if(!this.firstNumberIsPrime()) {								
		this.generatePrimeNumbersFor(number);		
		
		for(var i=0; i<this.primeNumbers.length; i++){
			this.pushPrimeRemaninders(number, this.primeNumbers[i]);			
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

PrimeFactors.prototype.firstNumberIsPrime = function(){
	return (this.result.length != 0);
}

PrimeFactors.prototype.generatePrimeNumbersFor = function(number){
	for(var k=2; k<number; k++) {
		if(this.isPrime(k)) {
			this.primeNumbers.push(k);
		}
	}
}


PrimeFactors.prototype.pushPrime = function (number, divisor) {
	var result = false;
	
	if(number % divisor == 0) {
		this.result.push(divisor);
		result = number/divisor;
	}
	return result;
}

PrimeFactors.prototype.pushPrimeRemaninders = function(number, primeDivisor){
	var remainder = this.pushPrime(number, primeDivisor);			
	while(remainder) {
		remainder = this.pushPrime(remainder, primeDivisor);
	}	
}