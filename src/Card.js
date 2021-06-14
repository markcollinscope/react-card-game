// card, converts to numeric value in game.
import * as uts from 'utils';

export class Card 
{
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
	};

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
	numericValue = () => { return Card.values[this.value]; }
}

export default Card;