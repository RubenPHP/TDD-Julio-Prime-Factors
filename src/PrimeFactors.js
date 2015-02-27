function PrimeFactors() {
}

PrimeFactors.prototype.isPrime = function(number){
	if(number%2 != 0){
		return true;
	} else {
		return false;
	}
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