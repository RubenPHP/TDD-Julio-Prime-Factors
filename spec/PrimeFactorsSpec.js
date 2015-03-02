"use strict";

describe("PrimeFactors", function() {  
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
/*
  describe("when song has been paused", function() {
    beforeEach(function() {
      player.play(song);
      player.pause();
    });

    it("should indicate that the song is currently paused", function() {
      expect(player.isPlaying).toBeFalsy();

      // demonstrates use of 'not' with a custom matcher
      expect(player).not.toBePlaying(song);
    });

    it("should be possible to resume", function() {
      player.resume();
      expect(player.isPlaying).toBeTruthy();
      expect(player.currentlyPlayingSong).toEqual(song);
    });
  });
*/
/*
  // demonstrates use of spies to intercept and test method calls
  it("tells the current song if the user has made it a favorite", function() {
    spyOn(song, 'persistFavoriteStatus');

    player.play(song);
    player.makeFavorite();

    expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  });
*/
/*
  //demonstrates use of expected exceptions
  describe("#resume", function() {
    it("should throw an exception if song is already playing", function() {
      player.play(song);

      expect(function() {
        player.resume();
      }).toThrowError("song is already playing");
    });
  });
*/
});
