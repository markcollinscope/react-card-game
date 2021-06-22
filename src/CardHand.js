export default class CardHand {
	cardsInHand = [];

	addCard = (c) => {
		this.cardsInHand.push(c);
	}

	get cards() { return this.cardsInHand };
	get nCards() { return this.cards.length; };
}
