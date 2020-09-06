import { forEach_ifPasses_doAction } from './__privy';


// Similar to Array.filter(), except it includes optional callback `getValue()` which
// lets you customize what value to get from the element that passes `test`.
// By default it simply returns the element.

export function getByTest(
	test: (value, index?, array?) => boolean,
	array: any[],
	getValue: (value, index?, array?) => any = (value) => value,

): any[] {

	let found = [];
	const action = (value, index, array) => found.push(getValue(value, index, array));

	forEach_ifPasses_doAction(test, action, array);
	return found;
}
