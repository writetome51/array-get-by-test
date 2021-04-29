// Similar to Array.filter(), except it includes optional callback `getValue()` which
// lets you customize what value to get from the element that passes `test`.
// By default it simply returns the element.

export function getByTest<T>(
	test: (value: T, index?: number, array?: T[]) => boolean,
	array: T[],
	getValue: (value: T, index?: number, array?: T[]) => any = (value) => value,
): any[] {

	let found = [];
	const action = (value, index, array) => found.push(getValue(value, index, array));

	forEach_ifPasses_doAction(array, test, action);
	return found;


	function forEach_ifPasses_doAction(
		array: any[],
		test: (value, index?, array?) => boolean,
		action: (value?, index?, array?) => void
	): void {
		for (let i = 0, length = array.length; i < length; ++i) {
			if (test(array[i], i, array)) action(array[i], i, array);
		}
	}

}
