"use strict";

function PrimeFactors() {
}

PrimeFactors.prototype.isPrime = function(number) {	
	var isPrime = false;
	
	if((number == 2 || number == 3 || number == 5) ||!this.isDivisible(number)) {
		isPrime = true;
	}

	return isPrime;
}

PrimeFactors.prototype.isDivisible = function(number){
	var divisibles = [2,3,5,7,11];
	
	return divisibles.some(function(divisible){
		return ((number%divisible)==0);
	});
}