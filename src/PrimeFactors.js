"use strict";

function PrimeFactors() {
}

PrimeFactors.prototype.isPrime = function(number) {	
	var isPrime = false;
	
	if((number == 2 || number == 3) ||!this.isDivisible(number)) {
		isPrime = true;
	}

	return isPrime;
}

PrimeFactors.prototype.isDivisible = function(number){
	return  ((number%2==0)||(number%3==0)||(number%7==0));
}