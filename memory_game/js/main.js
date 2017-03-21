var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var cardId = "0";

cardsInPlay.push(cards[cardId]);

//create a function to store all steps that should happen when the user flips a card.
var flipCard = function(cardID) {
	// Display card that was just flipped
	console.log("User flipped " + cards[cardId]);
		// Add logic to check to see if the length of the CardsInPlay array is 2
		// also check equality between the two cards match
		if (cardsInPlay.length === 2) {
			if (cardsInPlay[0] === cardsInPlay[1]) {
				alert("You found a match!");
			} else {
				alert("Sorry, try again!");
			}
		}
};


cardsInPlay.push(cards[cardId]);

flipCard(0);
flipCard(2);

// create a function to store the steps to check for a match.
var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("you've found a match!");
	} else {
		console.log("Sorry, try again.");
	}
};

checkForMatch(flipCard);

