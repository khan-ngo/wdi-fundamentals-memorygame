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

var cardsInPlay = [];

var checkForMatch = function (){
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
			console.log("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
};


var flipCard = function() {

	var cardId = this.getAttribute('data-id');
	console.log("CardId: " + cardId);
	console.log("User flipped " + cards[cardId].rank);

	cardsInPlay.push(cards[cardId].rank);

	this.setAttribute('src',cards[cardId].cardImage)
		if(cardsInPlay.length == 2){
			checkForMatch();
				}

		if(cardsInPlay[0]===cardsInPlay[1]) {
			console.log("You found a match!");
		} else {
			console.log("Sorry, try again");

		}
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
}

var createBoard = function() {
	for(var i = 0; i < cards.length; i++) {
		var cardElement =[];
		cardElement[i] = document.createElement('img');
		cardElement[i].setAttribute('src','images/back.png');
		cardElement[i].setAttribute('data-id',i);
		cardElement[i].addEventListener('click',flipCard);
		document.getElementById('game-board').appendChild(cardElement[i]);
	}
}
createBoard();

var reset = function() {
	for(var i = 0; i < cards.length; i++) {
		document.getElementsByTagName('img')[i].setAttribute('src','images/back.png');
		console.log('test');
		cardsInPlay = [];
	}
}

var resetButton = document.querySelector('button');
resetButton.addEventListener('click', reset);