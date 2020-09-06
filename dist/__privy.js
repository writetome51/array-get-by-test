// For each item in `array`, if item passes `test`, `action` is called.

export function forEach_ifPasses_doAction(test, action, array) {
	for (let i = 0, length = array.length; i < length; ++i) {
		if (test(array[i], i, array))  action(array[i], i, array);
	}
}


// Same as above, except the loop goes from right to left.

export function forEach_ifPasses_doAction_fromRight(test, action, array) {
	for (let i = array.length - 1; i > -1; --i) {
		if (test(array[i], i, array))  action(array[i], i, array);
	}
}
