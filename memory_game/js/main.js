var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[2];


// Add to Array
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

// Add logic to check to see if the length of the CardsInPlay array is 2
// also check equality between the two cards match
if (cardsInPlay.length ===2) {
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	} else {
		alert("Sorry, try again!");
	}
};

// Display card that was just flipped
console.log("User flipped " + cardsInPlay[0]);
console.log("User flipped " + cardsInPlay[1]);



