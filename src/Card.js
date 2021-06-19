import { assert } from './utils';

export default class Card 
{
	// strictly not needed, but shows intent.
	image = undefined;
	value = undefined;
	suit = undefined;
	code = undefined; 

	// Discuss placement of "values" here. 
	// Should it be somewhere else? SRP?
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

	numericValue = () => { return Card.values[this.value]; }

	constructor(c)
	{
		this.image = assert(c.image);
        this.value = assert(c.value);
        this.suit = assert(c.suit);
        this.code = assert(c.code);
	}

	getImage() { return this.image; }
}
