export declare function getByTest(
	test: (value: any, index?: number, array?: any[]) => boolean,
	array: any[],
	getValue?: (value: any, index?: number, array?: any[]) => any
): any[];
