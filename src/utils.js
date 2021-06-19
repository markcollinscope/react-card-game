// general purpose utilities...

export const assert = (value, msg = undefined) => 
{
	let error = "Assertion Error (" + value + "):";
	if (msg) error += " it failed an assertion test called ("  + msg + ")";

	if ( !value ) throw new Error(error);
	return value;
}
