
$(document).ready(function(){
	// global variables, need to count guesses
	var userGuess,
			guesses,
			secretNumber;

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

		// guess button, count guesses, calculate hotness
		$('#guessButton').click(function() {
			tallyGuesses();
			console.log($('#userGuess').val());
			bringTheHeat($('#userGuess').val());
			clearGuess();
		});

		$('a.new').click(function() {
			startNewGame();
		});

		startNewGame();

		// functions
		function clearGuess() {
			$('#userGuess').val('');
		}

		function startNewGame() {
			secretNumber = pickNumAnyNum();
			console.log(secretNumber);
			guesses = 0;
			$('#count').html(guesses);
		}

		function tallyGuesses() {
			guesses += 1;
			console.log(guesses);
			$('#count').html(guesses);
		}

		function pickNumAnyNum() {
			return parseInt(Math.random() * 100);
		}

		function bringTheHeat(heat) {
			console.log(heat);
		}

});
