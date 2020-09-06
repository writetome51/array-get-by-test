
export function forEach_ifPasses_doAction(
	test: (value, index?, array?) => boolean,
	action: (value?, index?, array?) => void,
	array
): void {
	for (let i = 0, length = array.length; i < length; ++i) {
		if (test(array[i], i, array)) action(array[i], i, array);
	}
}
