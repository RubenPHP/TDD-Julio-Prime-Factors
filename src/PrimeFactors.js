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
	return  ((number%2==0)||(number%3==0)||(number%5==0)||(number%7==0));
}

/*
Player.prototype.pause = function() {
  this.isPlaying = false;
};

Player.prototype.resume = function() {
  if (this.isPlaying) {
    throw new Error("song is already playing");
  }

  this.isPlaying = true;
};

Player.prototype.makeFavorite = function() {
  this.currentlyPlayingSong.persistFavoriteStatus(true);
};*/