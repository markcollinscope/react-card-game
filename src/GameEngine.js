import CardHand from './CardHand';
import DeckAPI from './DeckAPI';

const MAXSCORE = 21;

export default class GameEngine {

	static values = {
		"2": 2,
		"3": 3,
		"4": 4,
		"5": 5,
		"6": 6,
		"7": 7,
		"8": 8,
		"9": 9,
		"10": 10,
		"JACK": 10,
		"QUEEN": 10,
		"KING": 10, 
		"ACE": 11
	};

	deckAPI = undefined;
	cardHand = undefined;
	gameTotal = undefined;

    constructor() {
		this.deckAPI = new DeckAPI();
    }

	doChecks() {
		if ( !this.cardHand || (this.gameTotal === undefined) ) 
			throw Error(`Must call start() before other methods on GameEngine (${this.cardHand}, ${this.gameTotal})`);
	}

	doNumberValue = (c) => { return GameEngine.values[c.value]; }

	start = async () => {
		await this.deckAPI.newDeck();
        this.cardHand = new CardHand();
		this.gameTotal = 0;
	}

	drawCard = async () => {
		this.doChecks();

		let card = await this.deckAPI.drawCard();
		this.cardHand.addCard(card);
		this.gameTotal += this.doNumberValue(card);

		console.log("GameEngine - New Card, total ", card, this.gameTotal);
	}

	isBust() {
		return this.gameTotal > MAXSCORE;
	}

	getTotal() { 
		this.doChecks(); 
		return this.gameTotal;
	}

	getHand() { 
		this.doChecks();
		return this.cardHand; 
	}
	
	getNumberCards() { 
		this.doChecks(); 
		return this.cardHand.nCards; 
	}
}









