var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

var cardsInPlay = [];


//create a function to store all steps that should happen when the user flips a card.
var flipCard = function(cardId) {
	// Display card that was just flipped
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
		
	cardsInPlay.push(cards[cardId].rank);

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

