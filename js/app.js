
$(document).ready(function(){
	// global variables, need to count guesses
	var guesses,
			secretNumber,
			inputError;

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
			if (validGuess(userGuess).length===0) {
				clearGuess();
				tallyGuesses();
				postGuess(userGuess);
				$('#feedback').html(bringTheHeat(userGuess));
			} else {
				alert(validGuess(userGuess));
				clearGuess();
			}
		});

		$('a.new').click(function() {
			startNewGame();
		});

		// functions
		function clearGuess() {
			$('#userGuess').val('');
		}

		function startNewGame() {
			secretNumber = pickNumAnyNum();
			console.log('secretnumber: ' + secretNumber);
			guesses = 0;
			clearGuessList();
			$('#count').html(guesses);
			$('#feedback').html('Make your Guess!');
			$('#guessButton').show();
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
				response = 'Winner Winner Chicken Dinner!<br>Hit \"+New Game\" for a new game!';
			} else if (heat < 5) {
				response = 'On fire!';
			} else if (heat < 10) {
				response = 'Smokin!';
			} else if (heat < 20){
				response = 'Hot!';
			} else if (heat < 30) {
				response = 'Warm!';
			} else if (heat < 50) {
				response = 'Cold!';
			} else if (heat < 75) {
				response = 'Ice Cold!';
			} else {
				response = 'Really. That\'s your guess.';
			}
			return response;
		}

		function postGuess(userGuess) {
			// add li to ul
			$('#guessList').append('<li>'+userGuess+'</li>');
		}

		function winner() {
			$('#guessButton').hide();
		}

		function validGuess(userGuess) {
			// check inputbox has something in it.
			// check that it is a number
			// check that it is an integer
			// check that is is within range 0 to 100
			var errorMessage = '';

			if (userGuess.length===0) {
				errorMessage = errorMessage + 'You did not enter a guess.';
			} else if (userGuess.isNaN) {
			  errorMessage = 'You did not enter a number.';
			} else if (userGuess%1 !== 0) {
				if (errorMessage.length>0) {errorMessage = errorMessage + '<br>';}
			  errorMessage = 'You did not enter an integer.';
			} else if (userGuess < 0 || userGuess > 100) {
				errorMessage = 'Guess out range. Pick a number 1 to 100.';
			}

			return errorMessage;

		}

		function clearGuessList() {
			$('#guessList').children('li').remove();
		}

		startNewGame();

});
