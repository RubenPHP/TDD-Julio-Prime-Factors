"use strict";

describe("PrimeNumber", function() {  
  var primeFactors;

  beforeEach(function() {    
    primeFactors = new PrimeFactors();
  });
 
	it('should return false when number is 4', function() {
    expect(primeFactors.isPrime(4)).toEqual(false);
	});

  it("should return true when number is 5", function() {
	  expect(primeFactors.isPrime(5)).toEqual(true);
  });
	
  it('should return true when number is 3', function() {
		expect(primeFactors.isPrime(3)).toEqual(true); 
  });
		
	it("sholud return true when number is 2", function() {
		expect(primeFactors.isPrime(2)).toEqual(true);	
	});

  it('should return false when number is 15', function() {
    expect(primeFactors.isPrime(15)).toEqual(false);
  });
		
	it("shold return false when number is 49", function() {
		expect(primeFactors.isPrime(49)).toEqual(false);			
	});
  
	it('should return false when number is 55', function() {
    expect(primeFactors.isPrime(55)).toEqual(false);
  });
	
	it('should return false when number is 121', function() {
    expect(primeFactors.isPrime(121)).toEqual(false);
  });
	
  it('should return false when number is 169', function() {
    expect(primeFactors.isPrime(169)).toEqual(false);    
  });
});

describe("PrimeFactors", function() {  
  var primeFactors;

  beforeEach(function() {    
    primeFactors = new PrimeFactors();
  });
 
  it('should return [2] when number is 2', function() {
    expect(primeFactors.getPrimeFactors(2)).toEqual([2]);    
  });
	
	it("should return [2,2] when number is 4", function() {
		expect(primeFactors.getPrimeFactors(4)).toEqual([2,2]);
	});

  it('should return [2,3] when number is 6', function() {
    expect(primeFactors.getPrimeFactors(6)).toEqual([2,3]);
  });
	
	it('should return [7] when number is 7', function() {
    expect(primeFactors.getPrimeFactors(7)).toEqual([7]);
  });
	
	it('should return [3,3] when number is 9', function() {
    expect(primeFactors.getPrimeFactors(9)).toEqual([3,3]);
  });

  it('should return [2,2,2] when number is 8', function() {
    expect(primeFactors.getPrimeFactors(8)).toEqual([2,2,2]);
  });
	
	it('should return [2,2,3] when number is 12', function() {
    expect(primeFactors.getPrimeFactors(12)).toEqual([2,2,3]);
  });
	
	it('should return [2,3,3] when number is 18', function() {
    expect(primeFactors.getPrimeFactors(18)).toEqual([2,3,3]);
  });

  it('should return [2,2,7] when number is 28', function() {
    expect(primeFactors.getPrimeFactors(28)).toEqual([2,2,7]);
  });
	
	it('should return [2,2,7] when number is 28', function() {
    expect(primeFactors.getPrimeFactors(28)).toEqual([2,2,7]);
  });
		
	it('should return [2,2,2,5] when number is 40', function() {
    expect(primeFactors.getPrimeFactors(40)).toEqual([2,2,2,5]);
  });

  it('should return [11] when number is 121', function() {
      expect(primeFactors.getPrimeFactors(121)).toEqual([11]);
    });	
});