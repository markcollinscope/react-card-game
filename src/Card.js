import { assert } from './utils';

export default class Card 
{
	image = undefined;
	value = undefined;
	suit = undefined;
	code = undefined;

	constructor(c)
	{
		this.image = assert(c.image);
        this.value = assert(c.value);
        this.suit = assert(c.suit);
        this.code = assert(c.code);
	}

	getImage() { return this.image; }
}

