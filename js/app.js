
$(document).ready(function(){
	// global variables, need to count guesses
	var userGuess,
			guesses,
			secretNumber;

		startNewGame();

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
		});

		$('a.new').click(function() {
			startNewGame();
		});

		// functions
		function startNewGame() {
			secretNumber = pickNumAnyNum();
			guesses = 0;
			$('#count').html(guesses);
		}

		function tallyGuesses() {
			guesses += 1;
			console.log(guesses);
			$('#count').html(guesses);
		}

		function pickNumAnyNum() {
			// return parseInt(Math.random() * 100);
			for (x = 0; x < 101; x++) {
				console.log(parseInt(Math.random() * 100));
			}
		}

});
