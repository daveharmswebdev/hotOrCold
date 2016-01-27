
$(document).ready(function(){
	// global variables, need to count guesses
	var guesses,
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
			var userGuess = $('#userGuess').val();
			clearGuess();
			tallyGuesses();
			// postGuess(userGuess);
			bringTheHeat(userGuess);
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
			console.log('secretnumber: ' + secretNumber);
			guesses = 0;
			$('#count').html(guesses);
		}

		function tallyGuesses() {
			guesses += 1;
			$('#count').html(guesses);
		}

		function pickNumAnyNum() {
			return parseInt(Math.random() * 100);
		}

		function bringTheHeat(userGuess) {
			var heat = Math.abs(secretNumber - userGuess);
			var response;
			console.log('heat ' + heat);
			if (heat === 0) {
				winner();
			} else if (heat < 5) {
				response = 'On fire!';
				console.log(response);
			} else if (heat < 10) {
				response = 'Smokin!';
				console.log(response);
			} else if (heat < 20){
				response = 'Hot!';
				console.log(response);
			} else if (heat < 30) {
				response = 'Warm!';
				console.log(response);
			} else if (heat < 50) {
				response = 'Cold!';
				console.log(response);
			} else if (heat < 75) {
				response = 'Ice Cold!';
				console.log(response);
			} else {
				response = 'Really. That\'s your guess.';
				console.log(response);
			}
		}

		function postGuess(userGuess) {
			// add li to ul

		}

		function winner() {
			// winner winner chicken dinner
			console.log('Winner Winner Chicken Dinner!');
		}

});
