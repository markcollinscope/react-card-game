import * as uts from './utils';

const URLBASE = 'https://deckofcardsapi.com/api/deck/'
const SHUFFLE = 'new/shuffle/?deck_count=1'
const DRAWONE = '/draw/?count=1'

const deckApiFetchJson = async (request) =>
{
	let response = await fetch(URLBASE + request);
	let json = await response.json();

	if (! json.success) throw new Error("Fetch API Error - Bye!");
	
	// console.log("deckApiFetchJson:", json);

	return json;
}

export class Card {
	constructor(c)
	{
		this.image = uts.assert(c.image);
        this.value = uts.assert(c.value);
        this.suit = uts.assert(c.suit);
        this.code = uts.assert(c.code);
	}

	image = () => this.image;
	value = () => this.value;
	suit = () => this.suit;
	code = () => this.code;
}

export class Deck
{
	deckId = undefined;
	lastCard = { deck_id: "abcd" };

	static values = {
		"2": 2,
		"3": 3,
		"4": 4,
		"5": 5,
		"6": 6,
		"7": 7,
		"8": 8,
		"9": 9,
		"0": 10,
		"JACK": 10,
		"QUEEN": 10,
		"KING": 10, 
		"ACE": 11
	}

	doChecks = (full=false)  =>
	{
		if ( this.deckId === undefined || (full && this.lastCard === undefined) )
			throw new Error("DeckOfCard - must request newDeck() and draw()");
	}

	newDeck = async () =>
	{
		let json = await deckApiFetchJson(SHUFFLE);
		this.deckId = json.deck_id;
		
		// console.log("newDeck:", this.deckId, this.lastCard);
	
		return this.deckId;
	}

	async drawCard()
	{
		this.doChecks(false);

		this.lastCard = new Card ( await deckApiFetchJson(this.deckId + DRAWONE) );
		return 
	}
}


