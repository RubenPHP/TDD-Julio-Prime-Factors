function PrimeFactors() {
}

PrimeFactors.prototype.isPrime = function(number){
	var result = false
	if(number==5){
		result = true;
	}
	return result;
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