import Card from "./Card";

export default class CardHand {

	constructor(props) {
  		super(props);
  		this.cards = [];
  		this.nCards = 0;
	}

	addCard = (c) => {
		this.cards.push(c);
		this.nCards++;
	}

	getCards = () => this.cards;
	getNCards = () => this.nCards;
}
