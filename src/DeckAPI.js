// TODO await timeouts?
import { assert } from './utils';

import Card from './Card';

const URLBASE 		= 'https://deckofcardsapi.com/api/deck/';
const SHUFFLEDDECK 	= 'new/shuffle/?deck_count=1';
const DRAWCARD 		= '/draw/?count=1';

export default class DeckAPI
{
	deckId = undefined;

	doApiFetchJson = async (request) =>
	{
		let response = await fetch(URLBASE + request);
		let json = await response.json();

		if (! json.success) throw new Error("Fetch API Error - Bye!");
		
		return json;
	}

	doChecks = ()  =>
	{
		if ( this.deckId === undefined )
			throw new Error("DeckOfCard - must call newDeck()");
	}

	newDeck = async () =>
	{
		let json = await this.doApiFetchJson(SHUFFLEDDECK);
		this.deckId = json.deck_id;
		
		return this.deckId;
	}

	id = () =>
	{
		this.doChecks();
		return this.deckId;
	}

	drawCard = async () => 
	{
		this.doChecks();

		let jsonCards = await this.doApiFetchJson(this.deckId + DRAWCARD);
		assert( this.deckId === jsonCards.deck_id, "same deck" );

		this.lastCard = new Card (jsonCards.cards[0]);
		return this.lastCard;
	}
}

