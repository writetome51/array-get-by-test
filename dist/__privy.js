
export function forEach_ifPasses_doAction(test, action, array) {
	for (let i = 0, length = array.length; i < length; ++i) {
		if (test(array[i], i, array))  action(array[i], i, array);
	}
}
