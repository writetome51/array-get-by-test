export declare function getByTest<T>(
	test: (value: T, index?: number, array?: T[]) => boolean,
	array: T[],
	getValue?: (value: T, index?: number, array?: T[]) => any
): any[];
