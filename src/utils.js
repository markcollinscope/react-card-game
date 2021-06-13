// general purpose utilities...

export const assert = (value) => 
{
	if ( !value ) throw new Error("Assertion Error: ", value);
	return value;
}
