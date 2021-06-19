// TODO await timeouts?
import { assert } from './utils';

import Card from './Card';

const URLBASE 		= 'https://deckofcardsapi.com/api/deck/';
const SHUFFLEONE 	= 'new/shuffle/?deck_count=1';
const DRAWONE 		= '/draw/?count=1';

export default class Deck
{
	deckId = undefined;
	lastCard = undefined;

	doApiFetchJson = async (request) =>
	{
		let response = await fetch(URLBASE + request);
		let json = await response.json();

		if (! json.success) throw new Error("Fetch API Error - Bye!");
		
		return json;
	}

	doChecks = (full=false)  =>
	{
		if ( this.deckId === undefined )
			throw new Error("DeckOfCard - must call newDeck()");

		if ( full && this.lastCard === undefined ) 
			throw new Error("DeckOfCard - must call drawCard()")
	}

	newDeck = async () =>
	{
		let json = await this.doApiFetchJson(SHUFFLEONE);
		this.deckId = json.deck_id;
		
		// console.log("newDeck:", this.deckId, this.lastCard);
	
		return this.deckId;
	}

	id = () =>
	{
		this.doChecks(false);
		return this.deckId;
	}

	drawCard = async () => 
	{
		this.doChecks(false);

		let jsonCards = await this.doApiFetchJson(this.deckId + DRAWONE);
		assert( this.deckId === jsonCards.deck_id, "same deck" );

		this.lastCard = new Card (jsonCards.cards[0]);
		return this.lastCard;
	}
}

