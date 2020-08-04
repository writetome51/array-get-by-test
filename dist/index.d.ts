export declare function getByTest(
	testFunction: (value: any, index?: number, array?: any[]) => boolean,
	array: any[]
): { value: any; index: number; }[];
