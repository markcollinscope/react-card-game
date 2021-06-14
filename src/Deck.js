// TODO import * as uts from './utils';
// TODO await timeouts?

import Card from 'card';

const URLBASE 		= 'https://deckofcardsapi.com/api/deck/';
const SHUFFLEONE 	= 'new/shuffle/?deck_count=1';
const DRAWONE 		= '/draw/?count=1';

const deckApiFetchJson = async (request) =>
{
	let response = await fetch(URLBASE + request);
	let json = await response.json();

	if (! json.success) throw new Error("Fetch API Error - Bye!");
	
	return json;
}

export class Deck
{
	deckId = undefined;
	lastCard = undefined;

	doChecks = (full=false)  =>
	{
		if ( this.deckId === undefined || (full && this.lastCard === undefined) )
			throw new Error("DeckOfCard - must request newDeck() and draw()");
	}

	newDeck = async () =>
	{
		let json = await deckApiFetchJson(SHUFFLEONE);
		this.deckId = json.deck_id;
		
		// console.log("newDeck:", this.deckId, this.lastCard);
	
		return this.deckId;
	}

	drawCard = async () =>
	{
		this.doChecks(false);

		this.lastCard = new Card ( await deckApiFetchJson(this.deckId + DRAWONE) );
		return this.lastcard;
	}
}

