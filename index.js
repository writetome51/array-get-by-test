// Similar to Array.filter(), except it includes optional callback `getValue()` which
// lets you customize what value to get from the element that passes `test`.
// By default it simply returns the element.

export function getByTest(test, array, getValue = (value) => value) {
	let found = [];
	const action = (value, index, array) => found.push(getValue(value, index, array));

	forEach_ifPasses_doAction(array, test, action);
	return found;


	function forEach_ifPasses_doAction(array, test, action) {
		for (let i = 0, length = array.length; i < length; ++i) {
			if (test(array[i], i, array)) action(array[i], i, array);
		}
	}

}
