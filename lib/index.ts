import { forEach_ifPasses_doAction } from './__privy';

// Similar to Array.filter(), except it returns array of these objects:
//  {value: any,  index: integer}
//
// Originally used Array.filter(), but found Array.forEach() at least 15ms faster.

export function getByTest(
	test: (value, index?, array?) => boolean,
	array
): Array<{ value: any, index: number }> {

	let found = [],  action = (value, index) => found.push({value, index});

	forEach_ifPasses_doAction(test, action, array);
	return found;
}
