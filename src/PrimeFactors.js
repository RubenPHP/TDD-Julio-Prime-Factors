"use strict";

function PrimeFactors() {
}

PrimeFactors.prototype.isPrime = function(number) {	
	var isPrime = false;
	
	if((number == 2 || number == 3) || number % 2 != 0 && number % 3 != 0) {
		isPrime = true;
	}

	return isPrime;
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